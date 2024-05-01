import { createRoute } from "@/api/createRoute"
import { AddressModel } from "@/database/models/AddressModel"

// eslint-disable-next-line max-lines-per-function
const handler = createRoute(async (req, res) => {
  if (req.method === "GET") {
    const { locationType } = req.query
    const addresses = await AddressModel.find(
      locationType ? { locationType } : {},
    )

    res.send(addresses)

    return
  }

  if (req.method === "POST") {
    const {
      locationType,
      name,
      locationAddress,
      city,
      postalCode,
      country,
      ...specificDetails
    } = req.body
    const newAddress = new AddressModel({
      locationType,
      name,
      locationAddress,
      city,
      postalCode,
      country,
      ...specificDetails,
    })

    await newAddress.save()

    res.send(newAddress)
  }
})

export default handler
