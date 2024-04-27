import { Footer } from "@/components/Footer"
import { Header } from "@/components/Header"
import { Formik } from "formik"
import { Form } from "@/components/Form"
import { FormField } from "@/components/FormField"
import { useState } from "react"
import { validationSchema } from "@/database/schemas/validationSchema"
import axios from "axios"
import { Button } from "@/components/Button"
import { SelectField } from "@/components/SelectField"

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
  kitchenType: "",
  barType: "",
  averagePriceBar: "",
}
// eslint-disable-next-line max-lines-per-function
const AddressesPage = (props) => {
  const { addresses: initialAddresses } = props
  const [addresses, setAddresses] = useState(initialAddresses)
  const submit = async (
    {
      locationType,
      name,
      locationAddress,
      city,
      postalCode,
      country,
      barType,
      averagePriceBar,
    },
    { resetForm },
  ) => {
    const { data: newAddress } = await axios.post("/api/addresses", {
      locationType,
      name,
      locationAddress,
      city,
      postalCode,
      country,
      barType,
      averagePriceBar,
    })
    setAddresses([newAddress, ...addresses])
    resetForm()
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
            <SelectField name="locationType" />
            <FormField name="name" placeholder="Nom du lieu" />
            <FormField name="locationAddress" placeholder="Adresse du lieu" />
            <FormField name="city" placeholder="Ville" />
            <FormField name="postalCode" placeholder="Code postal" />
            <FormField name="country" placeholder="Pays" />
            <FormField name="barType" placeholder="Type de bar" />
            <FormField name="averagePriceBar" placeholder="Prix moyen" />
            <Button type="submit">Ajouter le lieu</Button>
          </Form>
        </Formik>
      </div>
      <Footer />
    </div>
  )
}

export default AddressesPage
