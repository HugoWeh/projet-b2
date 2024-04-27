import axios from "axios"
import { Formik } from "formik"
import { useRouter } from "next/router"
import * as yup from "yup"
import { Form } from "@/components/Form"
import { FormField } from "@/components/FormField"
import { Button } from "@/components/Button"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"

export const getServerSideProps = async ({ params: { addressId } }) => {
  const { data: address } = await axios(
    `http://localhost:3000/api/addresses/${addressId}`,
  )

  return {
    props: { address },
  }
}
const validationSchema = yup.object({
  locationType: yup.string().required(),
  name: yup.string().min(1).required(),
  locationAddress: yup.string().min(3).required(),
  city: yup.string().min(1).required(),
  postalCode: yup.number().integer().required(),
  country: yup.string().min(4).required(),
})
const AddressEditPage = ({ address }) => {
  const router = useRouter()
  const initialValues = address
  const handleSubmit = async ({
    _id,
    locationType,
    name,
    locationAddress,
    city,
    postalCode,
    country,
  }) => {
    await axios.patch(`/api/addresses/${_id}`, {
      locationType,
      name,
      locationAddress,
      city,
      postalCode,
      country,
    })

    router.push(`/addresses/${_id}`)
  }

  return (
    <div>
      <Header />
      <div className="p-2">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form>
            <FormField name="locationType" placeholder="Type de lieu" />
            <FormField name="name" placeholder="Nom du lieu" />
            <FormField name="locationAddress" placeholder="Adresse du lieu" />
            <FormField name="city" placeholder="Ville" />
            <FormField name="postalCode" placeholder="Code postal" />
            <FormField name="country" placeholder="Pays" />
            <Button type="submit">Sauvegarder les modifications</Button>
          </Form>
        </Formik>
      </div>
      <Footer />
    </div>
  )
}

export default AddressEditPage
