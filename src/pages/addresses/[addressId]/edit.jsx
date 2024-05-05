/* eslint-disable max-lines-per-function */
import axios from "axios"
import { Formik, ErrorMessage } from "formik"
import { useRouter } from "next/router"
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
    ...specificDetails
  }) => {
    await axios.patch(`/api/addresses/${_id}`, {
      locationType,
      name,
      locationAddress,
      city,
      postalCode,
      country,
      ...specificDetails,
    })

    router.push(`/addresses/${_id}`)
  }

  return (
    <div>
      <Header />
      <div className="p-2">
        <Formik
          initialValues={initialValues}
          noValidate
          onSubmit={handleSubmit}
        >
          <Form>
            <FormField name="name" placeholder="Nom du lieu" />
            <ErrorMessage name="name" />
            <FormField name="locationAddress" placeholder="Adresse du lieu" />
            <ErrorMessage name="locationAddress" />
            <FormField name="city" placeholder="Ville" />
            <ErrorMessage name="city" />
            <FormField name="postalCode" placeholder="Code postal" />
            <ErrorMessage name="postalCode" />
            <FormField name="country" placeholder="Pays" />
            <ErrorMessage name="country" />
            {address.locationType === "Restaurant" ? (
              <>
                <FormField name="kitchenType" placeholder="Type de cuisine" />
                <FormField name="starsNumber" placeholder="Nombre d'étoiles" />
                <FormField
                  name="averagePriceRestaurant"
                  placeholder="Prix moyen"
                />
              </>
            ) : (
              ""
            )}
            {address.locationType === "Musée" ? (
              <>
                <FormField
                  name="artisticMovement"
                  placeholder="Courant artistique"
                />
                <FormField name="artType" placeholder="Type d'art" />
                <FormField
                  name="freeOrPaidMuseum"
                  placeholder="Gratuit ou payant"
                />
                <FormField name="priceMuseum" placeholder="Prix" />
              </>
            ) : (
              ""
            )}
            {address.locationType === "Bar" ? (
              <>
                <FormField name="barType" placeholder="Type de bar" />
                <FormField name="averagePriceBar" placeholder="Prix moyen" />
              </>
            ) : (
              ""
            )}
            {address.locationType === "Parc" ? (
              <>
                <FormField name="parkType" placeholder="Type de parc" />
                <FormField
                  name="publicOrPrivate"
                  placeholder="Public ou privé"
                />
                <FormField
                  name="freeOrPaidPark"
                  placeholder="Gratuit ou payant"
                />
                <FormField name="pricePark" placeholder="Prix" />
              </>
            ) : (
              ""
            )}
            <Button type="submit">Sauvegarder les modifications</Button>
          </Form>
        </Formik>
      </div>
      <Footer />
    </div>
  )
}

export default AddressEditPage
