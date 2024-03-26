const sites = ["Restaurant", "Hôtel", "Musée", "Bar"]

export const Nav = () => (
  <>
    <div>
      {sites.map((value, index) => (
        <li key={index} className="hover:border-l-4 hover:border-black">
          <button className="pl-2 py-2">{value}</button>
        </li>
      ))}
    </div>
    <div className="flex justify-around p-2">
      <button className="bg-green-600 hover:bg-green-300 p-2 text-white font-semibold rounded">
        Ouvert
      </button>
      <button className="bg-red-600 hover:bg-red-300 p-2 text-white font-semibold rounded">
        Fermé
      </button>
    </div>
  </>
)
