/* eslint-disable max-lines-per-function */
import axios from "axios"
import Link from "next/link"
import { useState } from "react"

export const getServerSideProps = async () => {
  const { data: addresses } = await axios("http://localhost:3000/api/addresses")

  return {
    props: { addresses },
  }
}
const Nav = ({ addresses }) => {
  const [filter, setFilter] = useState("Tous")
  const handleChange = (e) => {
    setFilter(e.target.value)
  }

  return (
    <>
      <select name="filter" onChange={handleChange}>
        <option value="Tous">Tous</option>
        <option value="Restaurant">Restaurant</option>
        <option value="Musée">Musée</option>
        <option value="Bar">Bar</option>
        <option value="Parc">Parc</option>
      </select>
      {filter === "Tous"
        ? addresses.map((address, index) => (
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
                className="flex p-2 bg-indigo-600 text-white justify-center font-semibold rounded"
              >
                Afficher les détails
              </Link>
            </div>
          ))
        : ""}
      {filter === "Restaurant"
        ? addresses.map((address, index) =>
            address.locationType === "Restaurant" ? (
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
                  className="flex p-2 bg-indigo-600 text-white justify-center font-semibold rounded"
                >
                  Afficher les détails
                </Link>
              </div>
            ) : (
              ""
            ),
          )
        : ""}
      {filter === "Musée"
        ? addresses.map((address, index) =>
            address.locationType === "Musée" ? (
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
                  className="flex p-2 bg-indigo-600 text-white justify-center font-semibold rounded"
                >
                  Afficher les détails
                </Link>
              </div>
            ) : (
              ""
            ),
          )
        : ""}
      {filter === "Bar"
        ? addresses.map((address, index) =>
            address.locationType === "Bar" ? (
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
                  className="flex p-2 bg-indigo-600 text-white justify-center font-semibold rounded"
                >
                  Afficher les détails
                </Link>
              </div>
            ) : (
              ""
            ),
          )
        : ""}
      {filter === "Parc"
        ? addresses.map((address, index) =>
            address.locationType === "Parc" ? (
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
                  className="flex p-2 bg-indigo-600 text-white justify-center font-semibold rounded"
                >
                  Afficher les détails
                </Link>
              </div>
            ) : (
              ""
            ),
          )
        : ""}
    </>
  )
}

export default Nav
