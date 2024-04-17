import { Footer } from "@/components/Footer"
import { Header } from "@/components/Header"
import { Formik } from "formik"
import { Form } from "@/components/Form"
import { FormField } from "@/components/FormField"
import * as yup from "yup"
import axios from "axios"

export const getServerSideProps = async () => {
  const { data: addresses } = await axios("http://localhost:3000/api/address")

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
  postalCode: yup.string().max(5).required(),
  country: yup.string().min(4).required(),
})
const App = () => (
  <div className="flex flex-col bg-purple-600 h-screen">
    <Header />
    <Formik validationSchema={validationSchema} initialValues={initialValues}>
      <Form>
        <FormField name="type" placeholder="Type de lieu" />
        <FormField name="name" placeholder="Nom du lieu" />
      </Form>
    </Formik>
    <div className="flex flex-col p-4 gap-4 items-center">
      <h1 className="text-4xl">Ajouter une adresse</h1>
      <form className="bg-yellow-400 w-1/3 rounded p-2">
        <select name="type" id="type" className="font-semibold rounded mb-2">
          <option value="restaurant" className="font-semibold">
            Restaurant
          </option>
          <option value="hotel" className="font-semibold">
            Hôtel
          </option>
          <option value="musee" className="font-semibold">
            Musée
          </option>
          <option value="bar" className="font-semibold">
            Bar
          </option>
        </select>
        <h1>Nom du lieu</h1>
        <input type="text" />
        <h1>Adresse</h1>
        <input type="text" />
        <h1>Ville</h1>
        <input type="text" />
        <h1>Code postal</h1>
        <input type="text" />
      </form>
    </div>
    <Footer />
  </div>
)

export default App
