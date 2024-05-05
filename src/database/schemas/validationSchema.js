import * as yup from "yup"

export const validationSchema = yup.object({
  locationType: yup.string().required("Champ requis"),
  name: yup.string().min(1).required("Champ requis"),
  locationAddress: yup.string().min(3).required("Champ requis"),
  city: yup.string().min(1).required("Champ requis"),
  postalCode: yup.number().integer().required("Champ requis"),
  country: yup.string().min(4).required("Champ requis"),
  kitchenType: yup.string(),
  starsNumber: yup.number(),
  averagePriceRestaurant: yup.number(),
  artisticMovement: yup.string(),
  artType: yup.string(),
  freeOrPaidMuseum: yup.string(),
  priceMuseum: yup.number(),
  barType: yup.string(),
  averagePriceBar: yup.number(),
  parkType: yup.string(),
  publicOrPrivate: yup.string(),
  freeOrPaidPark: yup.string(),
  pricePark: yup.number(),
})
