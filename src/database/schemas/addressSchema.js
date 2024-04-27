import { Schema } from "mongoose"

export const addressSchema = new Schema({
  locationType: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  locationAddress: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  postalCode: {
    type: Number,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  barType: String,
  averagePriceBar: Number,
})
