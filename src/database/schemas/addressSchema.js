import { Schema } from "mongoose"

export const addressSchema = new Schema({
  locationType: {
    type: String,
    default: "Restaurant",
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
  kitchenType: String,
  starsNumber: Number,
  averagePriceRestaurant: Number,
  artisticMovement: String,
  artType: String,
  freeOrPaidMuseum: String,
  priceMuseum: Number,
  barType: String,
  averagePriceBar: Number,
  parkType: String,
  publicOrPrivate: String,
  freeOrPaidPark: String,
  pricePark: Number,
})
