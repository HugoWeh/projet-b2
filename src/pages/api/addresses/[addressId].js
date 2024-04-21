import { createRoute } from "@/api/createRoute"
import { AddressModel } from "@/database/models/AddressModel"

const handler = createRoute(async (req, res) => {
  const { addressId } = req.query
  const address = await AddressModel.findById(addressId)

  if (!address) {
    res.status(404).send({ error: "not found" })

    return
  }

  if (req.method === "GET") {
    res.send(address)
  }

  if (req.method === "PATCH") {
    const {
      locationType,
      name,
      locationAddress,
      city,
      postalCode,
      country,
      isOpen,
    } = req.body

    Object.assign(address, {
      locationType: locationType || address.locationType,
      name: name || address.name,
      locationAddress: locationAddress || address.locationAddress,
      city: city || address.city,
      postalCode: postalCode || address.postalCode,
      country: country || address.country,
      isOpen: isOpen ?? address.isOpen,
    })

    await address.save()

    res.send(address)

    return
  }

  if (req.method === "DELETE") {
    await address.deleteOne()

    res.send(address)
  }
})

export default handler
