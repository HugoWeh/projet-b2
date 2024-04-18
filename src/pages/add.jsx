import { Footer } from "@/components/Footer"
import { Header } from "@/components/Header"
import { Formik } from "formik"
import { Form } from "@/components/Form"
import { FormField } from "@/components/FormField"
import { useState } from "react"
import * as yup from "yup"
import axios from "axios"
import { Button } from "@/components/Button"

export const getServerSideProps = async () => {
  const { data: addresses } = await axios("http://localhost:3000/api/addresses")

  return {
    props: {
      addresses,
    },
  }
}
const initialValues = {
  locationType: "",
  name: "",
  locationAddress: "",
  city: "",
  postalCode: "",
  country: "",
}
const validationSchema = yup.object({
  locationType: yup
    .string()
    .oneOf(["Restaurant", "Musée", "Bar", "Parc"])
    .required(),
  name: yup.string().min(1).required(),
  locationAddress: yup.string().min(3).required(),
  city: yup.string().min(1).required(),
  postalCode: yup.number().integer().required(),
  country: yup.string().min(4).required(),
})
// eslint-disable-next-line max-lines-per-function
const AddressesPage = (props) => {
  const { addresses: initialAddresses } = props
  const [addresses, setAddresses] = useState(initialAddresses)
  const submit = async (
    { locationType, name, locationAddress, city, postalCode, country },
    { resetForm },
  ) => {
    const { data: newAddress } = await axios.post("/api/addresses", {
      locationType,
      name,
      locationAddress,
      city,
      postalCode,
      country,
    })
    setAddresses([newAddress, ...addresses])
    resetForm()
  }
  const toggleAddress = (address) => async () => {
    const { data: uptadedAddress } = await axios.patch(
      `/api/addresses/${address._id}`,
      { isOpen: !address.isOpen },
    )

    setAddresses((currentAddresses) => {
      const uptadedAddressIndex = currentAddresses.findIndex(
        ({ _id }) => _id === address._id,
      )

      return currentAddresses.with(uptadedAddressIndex, uptadedAddress)
    })
  }

  return (
    <div className="flex flex-col bg-purple-600">
      <Header />
      <div className="bg-yellow-600 w-1/2 p-2">
        <Formik
          validationSchema={validationSchema}
          initialValues={initialValues}
          onSubmit={submit}
        >
          <Form>
            <FormField name="locationType" placeholder="Type de lieu" />
            <FormField name="name" placeholder="Nom du lieu" />
            <FormField name="locationAddress" placeholder="Adresse du lieu" />
            <FormField name="city" placeholder="Ville" />
            <FormField name="postalCode" placeholder="Code postal" />
            <FormField name="country" placeholder="Pays" />
            <Button type="submit">Ajouter le lieu</Button>
          </Form>
        </Formik>
      </div>
      <Footer />
    </div>
  )
}

export default AddressesPage
