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
    <div className="p-2">
      <h1 className="text-2xl font-semibold">
        {address.locationType}: {address.name}
      </h1>
      <p>Adresse : {address.locationAddress}</p>
      <p>Ville : {address.city}</p>
      <p>Code postal : {address.postalCode}</p>
      <p>Pays : {address.country}</p>
    </div>
    <Link
      href={`/addresses/${address._id}/edit`}
      className="p-2 rounded bg-indigo-600 font-semibold text-white"
    >
      Modfier
    </Link>
    <Link
      href="/"
      className="p-2 rounded bg-indigo-600 font-semibold text-white"
      onClick={async () => {
        await axios.delete(`/api/addresses/${address._id}`)
      }}
    >
      Supprimer
    </Link>
    <Footer />
  </div>
)

export default AddressPage
