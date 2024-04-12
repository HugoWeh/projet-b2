import { createRoute } from "@/api/createRoute"
import { AddressModel } from "@/database/models/AddressModel"

const handler = createRoute(async (req, res) => {
  const { AddressId } = req.query
  const address = await AddressModel.findById(AddressId)

  if (!address) {
    res.status(404).send({ error: "not found" })

    return
  }

  if (req.method === "GET") {
    res.send(address)
  }
})

export default handler
