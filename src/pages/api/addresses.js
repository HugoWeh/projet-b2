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
    const newAddress = new AddressModel({
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
    })

    await newAddress.save()

    res.send(newAddress)
  }
})

export default handler
