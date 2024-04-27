import * as yup from "yup"

export const validationSchema = yup.object({
  locationType: yup.string().required(),
  name: yup.string().min(1).required(),
  locationAddress: yup.string().min(3).required(),
  city: yup.string().min(1).required(),
  postalCode: yup.number().integer().required(),
  country: yup.string().min(4).required(),
  kitchenType: yup.string(),
  barType: yup.string(),
  averagePriceBar: yup.string(),
})
