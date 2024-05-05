import * as yup from "yup"

export const validationSchema = yup.object({
  locationType: yup
    .string()
    .oneOf(["Restaurant", "Musée", "Bar", "Parc"])
    .required("Champ requis"),
  name: yup.string().min(1).required("Champ requis"),
  locationAddress: yup.string().min(3).required("Champ requis"),
  city: yup.string().min(1).required("Champ requis"),
  postalCode: yup.number().integer().required("Champ requis"),
  country: yup.string().min(4).required("Champ requis"),
  kitchenType: yup.string().when("locationType", {
    is: "Restaurant",
    then: () => yup.string().required("Champ requis"),
  }),
  starsNumber: yup.string().when("locationType", {
    is: "Restaurant",
    then: () => yup.number().required("Champ requis"),
  }),
  averagePriceRestaurant: yup.string().when("locationType", {
    is: "Restaurant",
    then: () => yup.number().required("Champ requis"),
  }),
  artisticMovement: yup.string().when("locationType", {
    is: "Musée",
    then: () => yup.string().required("Champ requis"),
  }),
  artType: yup.string().when("locationType", {
    is: "Musée",
    then: () => yup.string().required("Champ requis"),
  }),
  freeOrPaidMuseum: yup.string().when("locationType", {
    is: "Musée",
    then: () => yup.string().required("Champ requis"),
  }),
  priceMuseum: yup.string().when("locationType", {
    is: "Musée",
    then: () => yup.number().required("Champ requis"),
  }),
  barType: yup.string().when("locationType", {
    is: "Bar",
    then: () => yup.string().required("Champ requis"),
  }),
  averagePriceBar: yup.string().when("locationType", {
    is: "Bar",
    then: () => yup.number().required("Champ requis"),
  }),
  parkType: yup.string().when("locationType", {
    is: "Parc",
    then: () => yup.string().required("Champ requis"),
  }),
  publicOrPrivate: yup.string().when("locationType", {
    is: "Parc",
    then: () => yup.string().required("Champ requis"),
  }),
  freeOrPaidPark: yup.string().when("locationType", {
    is: "Parc",
    then: () => yup.string().required("Champ requis"),
  }),
  pricePark: yup.string().when("locationType", {
    is: "Parc",
    then: () => yup.number().required("Champ requis"),
  }),
})
