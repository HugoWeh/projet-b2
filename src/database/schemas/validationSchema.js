import * as yup from "yup"

export const validationSchema = yup.object({
  locationType: yup.string().required(),
  name: yup.string().min(1).required(),
  locationAddress: yup.string().min(3).required(),
  city: yup.string().min(1).required(),
  postalCode: yup.number().integer().required(),
  country: yup.string().min(4).required(),
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
