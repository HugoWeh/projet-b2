import Link from "next/link"

export const Header = () => (
  <header className="flex flex-row w-full justify-between bg-slate-300 p-4 gap-4 items-center shadow-md">
    <h1 className="text-4xl font-semibold text-gray-800">Onini</h1>
    <ul className="flex flex-row gap-12">
      <li>
        <Link href="/" className="text-gray-800 hover:text-gray-600 font-bold">
          Accueil
        </Link>
      </li>
      <li>
        <Link
          href="/add"
          className="text-gray-800 hover:text-gray-600 font-bold"
        >
          Ajouter
        </Link>
      </li>
    </ul>
    <input
      type="search"
      placeholder="Rechercher..."
      className="p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
    />
    <button className="p-2 text-white bg-indigo-600 hover:bg-indigo-700 font-semibold rounded">
      Se connecter
    </button>
  </header>
)
