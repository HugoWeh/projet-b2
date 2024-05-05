import { createRoute } from "@/api/createRoute"
import { AddressModel } from "@/database/models/AddressModel"

// eslint-disable-next-line max-lines-per-function
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
      kitchenType,
      starsNumber,
      averagePriceRestaurant,
      artisticMovement,
      artType,
      freeOrPaidMuseum,
      priceMuseum,
      barType,
      averagePriceBar,
      parkType,
      publicOrPrivate,
      freeOrPaidPark,
      pricePark,
    } = req.body

    Object.assign(address, {
      locationType: locationType || address.locationType,
      name: name || address.name,
      locationAddress: locationAddress || address.locationAddress,
      city: city || address.city,
      postalCode: postalCode || address.postalCode,
      country: country || address.country,
      kitchenType: kitchenType || address.kitchenType,
      starsNumber: starsNumber || address.starsNumber,
      averagePriceRestaurant:
        averagePriceRestaurant || address.averagePriceRestaurant,
      artisticMovement: artisticMovement || address.artisticMovement,
      artType: artType || address.artType,
      freeOrPaidMuseum: freeOrPaidMuseum || address.freeOrPaidMuseum,
      priceMuseum: priceMuseum || address.priceMuseum,
      barType: barType || address.barType,
      averagePriceBar: averagePriceBar || address.averagePriceBar,
      parkType: parkType || address.parkType,
      publicOrPrivate: publicOrPrivate || address.publicOrPrivate,
      freeOrPaidPark: freeOrPaidPark || address.freeOrPaidPark,
      pricePark: pricePark || address.pricePark,
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
