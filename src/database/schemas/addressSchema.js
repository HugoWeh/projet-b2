import { Schema } from "mongoose"

export const addressSchema = new Schema({
  type: {
    type: String,
    required: true,
  },
})
