/* eslint-disable max-lines */
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import axios from "axios"
import Link from "next/link"
import { useState } from "react"

export const getServerSideProps = async () => {
  const { data: addresses } = await axios("http://localhost:3000/api/addresses")

  return {
    props: { addresses },
  }
}
// eslint-disable-next-line max-lines-per-function
const HomePage = ({ addresses }) => {
  const [filter, setFilter] = useState("Tous")
  const handleChange = (e) => {
    setFilter(e.target.value)
  }

  return (
    <>
      <Header />
      <div className="flex flex-row">
        <div className="flex flex-col border-r border-black w-1/6">
          <select
            name="filter"
            onChange={handleChange}
            className="m-2 items-center p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          >
            <option value="Tous">Tous</option>
            <option value="Restaurant">Restaurant</option>
            <option value="Musée">Musée</option>
            <option value="Bar">Bar</option>
            <option value="Parc">Parc</option>
          </select>
        </div>
        <div className="w-full mb-16">
          {filter === "Tous"
            ? addresses.map((address, index) => (
                <div
                  key={index}
                  className="m-2 p-4 border border-gray-300 rounded-lg shadow-md bg-white hover:bg-blue-50"
                >
                  <h1 className="text-xl font-semibold mb-2">
                    {address.locationType}: {address.name}
                  </h1>
                  <p className="text-gray-700 mb-1">
                    Adresse : {address.locationAddress}
                  </p>
                  <p className="text-gray-700 mb-1">Ville : {address.city}</p>
                  <p className="text-gray-700 mb-1">
                    Code postal : {address.postalCode}
                  </p>
                  <p className="text-gray-700 mb-4">Pays : {address.country}</p>
                  <div className="flex justify-center">
                    <Link
                      href={`/addresses/${address._id}`}
                      className="py-2 px-6 bg-indigo-600 text-white font-semibold rounded hover:bg-indigo-700 hover:text-white"
                    >
                      Afficher les détails
                    </Link>
                  </div>
                </div>
              ))
            : ""}
          {filter === "Restaurant"
            ? addresses.map((address, index) =>
                address.locationType === "Restaurant" ? (
                  <div
                    key={index}
                    className="m-2 p-4 border border-gray-300 rounded-lg shadow-md bg-white"
                  >
                    <h1 className="text-xl font-semibold">
                      {address.locationType}: {address.name}
                    </h1>
                    <p className="text-gray-700 mb-2">
                      Adresse : {address.locationAddress}
                    </p>
                    <p className="text-gray-700 mb-2">Ville : {address.city}</p>
                    <p className="text-gray-700 mb-2">
                      Code postal : {address.postalCode}
                    </p>
                    <p className="text-gray-700 mb-4">
                      Pays : {address.country}
                    </p>
                    <div className="flex justify-center">
                      <Link
                        href={`/addresses/${address._id}`}
                        className="py-2 px-4 bg-indigo-600 text-white font-semibold rounded hover:bg-indigo-700"
                      >
                        Afficher les détails
                      </Link>
                    </div>
                  </div>
                ) : (
                  ""
                ),
              )
            : ""}
          {filter === "Musée"
            ? addresses.map((address, index) =>
                address.locationType === "Musée" ? (
                  <div
                    key={index}
                    className="m-2 p-4 border border-gray-300 rounded-lg shadow-md bg-white"
                  >
                    <h1 className="text-xl font-semibold">
                      {address.locationType}: {address.name}
                    </h1>
                    <p className="text-gray-700 mb-2">
                      Adresse : {address.locationAddress}
                    </p>
                    <p className="text-gray-700 mb-2">Ville : {address.city}</p>
                    <p className="text-gray-700 mb-2">
                      Code postal : {address.postalCode}
                    </p>
                    <p className="text-gray-700 mb-4">
                      Pays : {address.country}
                    </p>
                    <div className="flex justify-center">
                      <Link
                        href={`/addresses/${address._id}`}
                        className="py-2 px-4 bg-indigo-600 text-white font-semibold rounded hover:bg-indigo-700"
                      >
                        Afficher les détails
                      </Link>
                    </div>
                  </div>
                ) : (
                  ""
                ),
              )
            : ""}
          {filter === "Bar"
            ? addresses.map((address, index) =>
                address.locationType === "Bar" ? (
                  <div
                    key={index}
                    className="m-2 p-4 border border-gray-300 rounded-lg shadow-md bg-white"
                  >
                    <h1 className="text-xl font-semibold">
                      {address.locationType}: {address.name}
                    </h1>
                    <p className="text-gray-700 mb-2">
                      Adresse : {address.locationAddress}
                    </p>
                    <p className="text-gray-700 mb-2">Ville : {address.city}</p>
                    <p className="text-gray-700 mb-2">
                      Code postal : {address.postalCode}
                    </p>
                    <p className="text-gray-700 mb-4">
                      Pays : {address.country}
                    </p>
                    <div className="flex justify-center">
                      <Link
                        href={`/addresses/${address._id}`}
                        className="py-2 px-4 bg-indigo-600 text-white font-semibold rounded hover:bg-indigo-700"
                      >
                        Afficher les détails
                      </Link>
                    </div>
                  </div>
                ) : (
                  ""
                ),
              )
            : ""}
          {filter === "Parc"
            ? addresses.map((address, index) =>
                address.locationType === "Parc" ? (
                  <div
                    key={index}
                    className="m-2 p-4 border border-gray-300 rounded-lg shadow-md bg-white"
                  >
                    <h1 className="text-xl font-semibold">
                      {address.locationType}: {address.name}
                    </h1>
                    <p className="text-gray-700 mb-2">
                      Adresse : {address.locationAddress}
                    </p>
                    <p className="text-gray-700 mb-2">Ville : {address.city}</p>
                    <p className="text-gray-700 mb-2">
                      Code postal : {address.postalCode}
                    </p>
                    <p className="text-gray-700 mb-4">
                      Pays : {address.country}
                    </p>
                    <div className="flex justify-center">
                      <Link
                        href={`/addresses/${address._id}`}
                        className="py-2 px-4 bg-indigo-600 text-white font-semibold rounded hover:bg-indigo-700"
                      >
                        Afficher les détails
                      </Link>
                    </div>
                  </div>
                ) : (
                  ""
                ),
              )
            : ""}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default HomePage
