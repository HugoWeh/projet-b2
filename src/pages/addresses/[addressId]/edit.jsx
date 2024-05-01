/* eslint-disable max-lines-per-function */
import axios from "axios"
import { Formik } from "formik"
import { useRouter } from "next/router"
import { validationSchema } from "@/database/schemas/validationSchema"
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
