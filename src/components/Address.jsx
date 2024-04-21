import clsx from "clsx"
import Link from "next/link"
import toggleAddress from "@/pages/add"
import axios from "axios"

export const getServerSideProps = async () => {
  const { data: addresses } = await axios("http://localhost:3000/api/addresses")

  return {
    props: { addresses },
  }
}
const Address = (props) => (
  <table className="w-full border">
    <thead>
      <tr>
        <th className="p-3 bg-stone-200" />
        <th className="p-3 bg-stone-200">Description</th>
        <th className="p-3 bg-stone-200">Category</th>
      </tr>
    </thead>
    <tbody>
      {addresses.map((address, index) => (
        <tr key={index} className="even:bg-stone-100">
          <td className="p-3">
            <button
              onClick={toggleAddress(address)}
              className={clsx(
                "border w-4 h-4 border-stone-400",
                address.isOpen && "bg-stone-400",
              )}
              data-todo-id={address._id}
            />
          </td>
          <td className="p-3">
            <Link href={`/addresses/${address._id}/edit`}>
              {address.locationType}
            </Link>
          </td>
          <td className="p-3">{address.name}</td>
        </tr>
      ))}
    </tbody>
  </table>
)

export default Address
