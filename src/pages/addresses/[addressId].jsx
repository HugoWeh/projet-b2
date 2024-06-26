/* eslint-disable max-lines-per-function */
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import axios from "axios"
import Link from "next/link"

export const getServerSideProps = async ({ params: { addressId } }) => {
  const { data: address } = await axios(
    `http://localhost:3000/api/addresses/${addressId}`,
  )

  return {
    props: { address },
  }
}
const AddressPage = ({ address }) => (
  <div>
    <Header />
    <div className="m-2 p-4 border border-gray-300 rounded-lg shadow-md bg-white">
      <h1 className="text-xl font-semibold mb-2">
        {address.locationType}: {address.name}
      </h1>
      <p className="text-gray-700 mb-2">Adresse : {address.locationAddress}</p>
      <p className="text-gray-700 mb-2">Ville : {address.city}</p>
      <p className="text-gray-700 mb-2">Code postal : {address.postalCode}</p>
      <p className="text-gray-700 mb-2">Pays : {address.country}</p>
      {address.locationType === "Restaurant" ? (
        <>
          <p className="text-gray-700 mb-2">
            Type de cuisine : {address.kitchenType}
          </p>
          <p className="text-gray-700 mb-2">
            Nombre d'étoiles :{" "}
            {[...Array(address.starsNumber)].map((_, index) => (
              <span key={index}>⭐</span>
            ))}
          </p>
          <p className="mb-2">
            Prix moyen :{" "}
            {[...Array(address.averagePriceRestaurant)].map((_, index) => (
              <span key={index}>💵</span>
            ))}
          </p>
        </>
      ) : (
        ""
      )}

      {address.locationType === "Musée" ? (
        <>
          <p className="text-gray-700 mb-2">
            Courant artistique : {address.artisticMovement}
          </p>
          <p className="text-gray-700 mb-2">Type d'art : {address.artType}</p>
          <p className="text-gray-700 mb-2">
            Gratuit ou payant : {address.freeOrPaidMuseum}
          </p>
          <p className="mb-2">
            Prix :{" "}
            {[...Array(address.priceMuseum)].map((_, index) => (
              <span key={index}>💵</span>
            ))}
          </p>
        </>
      ) : (
        ""
      )}
      {address.locationType === "Bar" ? (
        <>
          <p className="text-gray-700 mb-2">Type de bar : {address.barType}</p>
          <p className="text-gray-700 mb-2">
            Prix moyen :{" "}
            {[...Array(address.averagePriceBar)].map((_, index) => (
              <span key={index}>💵</span>
            ))}
          </p>
        </>
      ) : (
        ""
      )}
      {address.locationType === "Parc" ? (
        <>
          <p className="text-gray-700 mb-2">
            Type de parc : {address.parkType}
          </p>
          <p className="text-gray-700 mb-2">
            Public ou privé : {address.publicOrPrivate}
          </p>
          <p className="text-gray-700 mb-2">
            Gratuit ou payant : {address.freeOrPaidPark}
          </p>
          <p className="text-gray-700 mb-2">
            Prix :{" "}
            {[...Array(address.pricePark)].map((_, index) => (
              <span key={index}>💵</span>
            ))}
          </p>
        </>
      ) : (
        ""
      )}
      <div className="flex justify-between">
        <Link
          href={`/addresses/${address._id}/edit`}
          className="py-2 px-4 bg-indigo-600 text-white font-semibold rounded hover:bg-indigo-700"
        >
          Modifier
        </Link>
        <Link
          href="/"
          className="py-2 px-4 bg-red-600 text-white font-semibold rounded hover:bg-red-700"
          onClick={async () => {
            await axios.delete(`/api/addresses/${address._id}`)
          }}
        >
          Supprimer
        </Link>
      </div>
    </div>
    <Footer />
  </div>
)

export default AddressPage
