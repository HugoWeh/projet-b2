import { addressSchema } from "@/database/schemas/addressSchema"
import mongoose from "mongoose"

export const AddressModel =
  mongoose.models.Address || mongoose.model("Address", addressSchema)
