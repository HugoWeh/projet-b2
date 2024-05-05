/* eslint-disable max-lines */
/* eslint-disable max-lines-per-function */
import axios from "axios"
import { Formik } from "formik"
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
const fieldStyle =
  "mt-1 block w-full border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm mb-4"
const labelStyle = "block text-sm font-medium text-gray-700"
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
      <div className="flex items-center justify-center w-1/2 m-8 border-2 rounded p-2 mx-auto">
        <Formik
          initialValues={initialValues}
          noValidate
          onSubmit={handleSubmit}
        >
          <Form className="flex flex-col w-full">
            <label htmlFor="locationType" className={labelStyle}>
              Nom du lieu
            </label>
            <FormField
              name="name"
              className={fieldStyle}
            />
            <label htmlFor="locationType" className={labelStyle}>
              Adresse du lieu
            </label>
            <FormField
              name="locationAddress"
              className={fieldStyle}
            />
            <label htmlFor="locationType" className={labelStyle}>
              Ville
            </label>
            <FormField name="city" className={fieldStyle} />
            <label htmlFor="locationType" className={labelStyle}>
              Code postal
            </label>
            <FormField
              name="postalCode"
              className={fieldStyle}
            />
            <label htmlFor="locationType" className={labelStyle}>
              Pays
            </label>
            <FormField
              name="country"
              className={fieldStyle}
            />
            {address.locationType === "Restaurant" ? (
              <>
                <label htmlFor="locationType" className={labelStyle}>
                  Type de cuisine
                </label>
                <FormField
                  name="kitchenType"
                  className={fieldStyle}
                />
                <label htmlFor="locationType" className={labelStyle}>
                  Nombre d'étoiles
                </label>
                <FormField
                  name="starsNumber"
                  className={fieldStyle}
                />
                <label htmlFor="locationType" className={labelStyle}>
                  Prix moyen
                </label>
                <FormField
                  name="averagePriceRestaurant"
                  className={fieldStyle}
                />
              </>
            ) : (
              ""
            )}
            {address.locationType === "Musée" ? (
              <>
                <label htmlFor="locationType" className={labelStyle}>
                  Courant artistique
                </label>
                <FormField
                  name="artisticMovement"
                  className={fieldStyle}
                />
                <label htmlFor="locationType" className={labelStyle}>
                  Type d'art
                </label>
                <FormField
                  name="artType"
                  className={fieldStyle}
                />
                <label htmlFor="locationType" className={labelStyle}>
                  Gratuit ou payant
                </label>
                <FormField
                  name="freeOrPaidMuseum"
                  className={fieldStyle}
                />
                <label htmlFor="locationType" className={labelStyle}>
                  Prix
                </label>
                <FormField
                  name="priceMuseum"
                  className={fieldStyle}
                />
              </>
            ) : (
              ""
            )}
            {address.locationType === "Bar" ? (
              <>
                <label htmlFor="locationType" className={labelStyle}>
                  Type de bar
                </label>
                <FormField
                  name="barType"
                  className={fieldStyle}
                />
                <label htmlFor="locationType" className={labelStyle}>
                  Prix moyen
                </label>
                <FormField
                  name="averagePriceBar"
                  className={fieldStyle}
                />
              </>
            ) : (
              ""
            )}
            {address.locationType === "Parc" ? (
              <>
                <label htmlFor="locationType" className={labelStyle}>
                  Type de parc
                </label>
                <FormField
                  name="parkType"
                  className={fieldStyle}
                />
                <label htmlFor="locationType" className={labelStyle}>
                  Public ou privé
                </label>
                <FormField
                  name="publicOrPrivate"
                  className={fieldStyle}
                />
                <label htmlFor="locationType" className={labelStyle}>
                  Gratuit ou payant
                </label>
                <FormField
                  name="freeOrPaidPark"
                  className={fieldStyle}
                />
                <label htmlFor="locationType" className={labelStyle}>
                  Prix
                </label>
                <FormField
                  name="pricePark"
                  className={fieldStyle}
                />
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
