import Link from "next/link"

export const Header = () => (
  <header className="flex flex-row w-full justify-between bg-slate-300 p-4 gap-4 items-center">
    <h1 className="text-4xl font-semibold">Onini</h1>
    <ul className="flex flex-row gap-24">
      <li className="hover:bg-slate-100 hover:rounded-2xl font-bold">
        <Link href="/" className="hover:p-2 p-2">
          Accueil
        </Link>
      </li>
      <li className="hover:bg-slate-100 hover:rounded-2xl font-bold">
        <Link href="/add" className="hover:p-2 p-2">
          Ajouter
        </Link>
      </li>
    </ul>
    <input type="search" placeholder="Rechercher..." className="p-1 rounded" />
    <button className="p-2 text-white hover:bg-red-400 bg-red-600 active:bg-white active:text-red-600 font-semibold">
      Se connecter
    </button>
  </header>
)
