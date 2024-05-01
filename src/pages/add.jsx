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
      <div className="w-1/2 p-2">
        <Formik
          validationSchema={validationSchema}
          initialValues={initialValues}
          onSubmit={submit}
        >
          {({ handleChange }) => (
            <Form>
              <SelectField
                name="locationType"
                setCurrent={setLocationSelect}
                onChange={handleChange}
              />
              <ErrorMessage
                name="locationType"
                className="text-sm text-red-600"
              />
              <FormField name="name" placeholder="Nom du lieu" />
              <ErrorMessage name="name" className="text-sm text-red-600" />
              <FormField name="locationAddress" placeholder="Adresse du lieu" />
              <FormField name="city" placeholder="Ville" />
              <FormField name="postalCode" placeholder="Code postal" />
              <FormField name="country" placeholder="Pays" />
              {locationSelect === "Restaurant" ? (
                <>
                  <FormField name="kitchenType" placeholder="Type de cuisine" />
                  <ErrorMessage
                    name="kitchenType"
                    className="text-sm text-red-600"
                  />
                  <FormField
                    name="starsNumber"
                    placeholder="Nombre d'étoiles"
                  />
                  <FormField
                    name="averagePriceRestaurant"
                    placeholder="Prix moyen"
                  />
                </>
              ) : (
                ""
              )}
              {locationSelect === "Musée" ? (
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
              {locationSelect === "Bar" ? (
                <>
                  <FormField name="barType" placeholder="Type de bar" />
                  <FormField name="averagePriceBar" placeholder="Prix moyen" />
                </>
              ) : (
                ""
              )}
              {locationSelect === "Parc" ? (
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
              <Button type="submit">Ajouter le lieu</Button>
            </Form>
          )}
        </Formik>
      </div>
      <Footer />
    </div>
  )
}

export default AddressesPage
