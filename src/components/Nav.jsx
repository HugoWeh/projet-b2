const sites = ["Restaurant", "Hôtel", "Musée", "Bar"]

export const Nav = () => (
  <>
    {sites.map((value, index) => (
      <li key={index} className="hover:border-l-4 hover:border-black">
        <button className="pl-2 py-2">{value}</button>
      </li>
    ))}
  </>
)
