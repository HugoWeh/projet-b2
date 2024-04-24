import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { Nav } from "@/components/Nav"
import { Stars } from "@/components/Stars"
import axios from "axios"
import Link from "next/link"

export const getServerSideProps = async () => {
  const { data: addresses } = await axios("http://localhost:3000/api/addresses")

  return {
    props: { addresses },
  }
}
const HomePage = ({ addresses }) => (
  <>
    <Header />
    <div className="flex flex-row">
      <div className="border-r border-black w-1/6">
        <ul className="bg-gray-200">
          <Nav />
        </ul>
        <div className="justify-around border-t-2 border-black p-2">
          <h1 className="text-2xl text-center">Avis</h1>
          <ul className="flex flex-row justify-around">
            <Stars />
          </ul>
        </div>
      </div>
      <div>
        {addresses.map((address, index) => (
          <div key={index} className="m-2 p-2 border-2 w-">
            <h1 className="text-2xl font-semibold">
              {address.locationType} : {address.name}
            </h1>
            <p>Adresse : {address.locationAddress}</p>
            <p>Ville : {address.city}</p>
            <p>Code postal : {address.postalCode}</p>
            <p>Pays : {address.country}</p>
            <Link
              href={`/addresses/${address._id}`}
              className="flex p-2 bg-indigo-600 text-white font-semibold rounded"
            >
              Afficher les détails
            </Link>
          </div>
        ))}
      </div>
    </div>
    <Footer />
  </>
)

export default HomePage
