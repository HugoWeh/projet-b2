/* eslint-disable max-lines-per-function */
/* eslint-disable max-lines */
import { Footer } from "@/components/Footer"
import { Header } from "@/components/Header"
import { Formik, ErrorMessage } from "formik"
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
  locationType: "Restaurant",
  name: "",
  locationAddress: "",
  city: "",
  postalCode: "",
  country: "",
  kitchenType: "",
  starsNumber: "",
  averagePriceRestaurant: "",
  artisticMovement: "",
  artType: "",
  freeOrPaidMuseum: "",
  priceMuseum: "",
  barType: "",
  averagePriceBar: "",
  parkType: "",
  publicOrPrivate: "",
  freeOrPaidPark: "",
  pricePark: "",
}
const fieldStyle =
  "mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm mb-2"
const labelStyle = "block text-sm font-medium text-gray-700"
// eslint-disable-next-line max-lines-per-function
const AddressesPage = (props) => {
  const { addresses: initialAddresses } = props
  const [addresses, setAddresses] = useState(initialAddresses)
  const [locationSelect, setLocationSelect] = useState(
    initialValues.locationType,
  )
  const submit = async (
    {
      name,
      locationAddress,
      city,
      postalCode,
      country,
      kitchenType,
      ...specificDetails
    },
    { resetForm },
  ) => {
    const { data: newAddress } = await axios.post("/api/addresses", {
      locationType: locationSelect,
      name,
      locationAddress,
      city,
      postalCode,
      country,
      kitchenType,
      ...specificDetails,
    })
    setAddresses([newAddress, ...addresses])
    resetForm()
  }

  return (
    <div className="flex flex-col">
      <Header />
      <div className="flex items-center justify-center w-1/2 m-8 border-2 rounded p-2 mx-auto">
        <Formik
          validationSchema={validationSchema}
          initialValues={initialValues}
          onSubmit={submit}
        >
          {({ handleChange }) => (
            <Form className="flex flex-col w-full">
              <div className="mb-4">
                <label htmlFor="locationType" className={labelStyle}>
                  Type de lieu
                </label>
                <SelectField
                  name="locationType"
                  setCurrent={setLocationSelect}
                  onChange={handleChange}
                  className={fieldStyle}
                />
                <ErrorMessage
                  name="locationType"
                  className="mt-1 text-sm text-red-600"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="name" className={labelStyle}>
                  Nom du lieu
                </label>
                <FormField name="name" className={fieldStyle} />
                <ErrorMessage
                  name="name"
                  className="mt-1 text-sm text-red-600"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="locationAddress" className={labelStyle}>
                  Adresse du lieu
                </label>
                <FormField name="locationAddress" className={fieldStyle} />
                <ErrorMessage name="locationAddress" />
              </div>

              <div className="mb-4">
                <label htmlFor="city" className={labelStyle}>
                  Ville
                </label>
                <FormField name="city" className={fieldStyle} />
                <ErrorMessage name="city" />
              </div>

              <div className="mb-4">
                <label htmlFor="postalCode" className={labelStyle}>
                  Code postal
                </label>
                <FormField name="postalCode" className={fieldStyle} />
                <ErrorMessage name="postalCode" />
              </div>

              <div className="mb-4">
                <label htmlFor="country" className={labelStyle}>
                  Pays
                </label>
                <FormField name="country" className={fieldStyle} />
                <ErrorMessage name="country" />
              </div>

              {locationSelect === "Restaurant" && (
                <>
                  <div className="mb-4">
                    <label htmlFor="kitchenType" className={labelStyle}>
                      Type de cuisine
                    </label>
                    <FormField name="kitchenType" className={fieldStyle} />
                    <ErrorMessage
                      name="kitchenType"
                      className="mt-1 text-sm text-red-600"
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="starsNumber" className={labelStyle}>
                      Nombre d'étoiles
                    </label>
                    <FormField name="starsNumber" className={fieldStyle} />
                    <ErrorMessage name="starsNumber" />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="averagePriceRestaurant"
                      className={labelStyle}
                    >
                      Prix moyen
                    </label>
                    <FormField
                      name="averagePriceRestaurant"
                      className={fieldStyle}
                    />
                    <ErrorMessage name="averagePriceRestaurant" />
                  </div>
                </>
              )}

              {locationSelect === "Musée" && (
                <>
                  <div className="mb-4">
                    <label htmlFor="artisticMovement" className={labelStyle}>
                      Courant artistique
                    </label>
                    <FormField name="artisticMovement" className={fieldStyle} />
                    <ErrorMessage name="artisticMovement" />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="artType" className={labelStyle}>
                      Type d'art
                    </label>
                    <FormField name="artType" className={fieldStyle} />
                    <ErrorMessage name="artType" />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="freeOrPaidMuseum" className={labelStyle}>
                      Gratuit ou payant
                    </label>
                    <FormField name="freeOrPaidMuseum" className={fieldStyle} />
                    <ErrorMessage name="freeOrPaidMuseum" />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="priceMuseum" className={labelStyle}>
                      Prix
                    </label>
                    <FormField name="priceMuseum" className={fieldStyle} />
                    <ErrorMessage name="priceMuseum" />
                  </div>
                </>
              )}

              {locationSelect === "Bar" && (
                <>
                  <div className="mb-4">
                    <label htmlFor="barType" className={labelStyle}>
                      Type de bar
                    </label>
                    <FormField name="barType" className={fieldStyle} />
                    <ErrorMessage name="barType" />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="averagePriceBar" className={labelStyle}>
                      Prix moyen
                    </label>
                    <FormField name="averagePriceBar" className={fieldStyle} />
                    <ErrorMessage name="averagePriceBar" />
                  </div>
                </>
              )}

              {locationSelect === "Parc" && (
                <>
                  <div className="mb-4">
                    <label htmlFor="parkType" className={labelStyle}>
                      Type de parc
                    </label>
                    <FormField name="parkType" className={fieldStyle} />
                    <ErrorMessage name="parkType" />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="publicOrPrivate" className={labelStyle}>
                      Public ou privé
                    </label>
                    <FormField name="publicOrPrivate" className={fieldStyle} />
                    <ErrorMessage name="publicOrPrivate" />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="freeOrPaidPark" className={labelStyle}>
                      Gratuit ou payant
                    </label>
                    <FormField name="freeOrPaidPark" className={fieldStyle} />
                    <ErrorMessage name="freeOrPaidPark" />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="pricePark" className={labelStyle}>
                      Prix
                    </label>
                    <FormField name="pricePark" className={fieldStyle} />
                    <ErrorMessage name="pricePark" />
                  </div>
                </>
              )}

              <div className="mt-6 bg-indigo-600 p-2 font-semibold text-white rounded">
                <Button type="submit" className="w-full">
                  Ajouter le lieu
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
      <Footer />
    </div>
  )
}

export default AddressesPage
