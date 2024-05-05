import Link from "next/link"
import Image from "next/image"

export const Header = () => (
  <header className="flex flex-col sm:flex-row justify-between items-center bg-slate-300 p-4 shadow-md">
    <div className="flex items-center">
      <Image
        src="/addmaps.png"
        width={75}
        height={75}
        alt="Logo"
        className="rounded"
      />
      <h1 className="text-4xl font-semibold text-gray-800 ml-4">AddMaps</h1>
    </div>
    <nav className="flex flex-col sm:flex-row items-center mt-4 sm:mt-0">
      <ul className="flex flex-col sm:flex-row gap-16 m-4 text-2xl">
        <li>
          <Link
            href="/"
            className="text-gray-800 hover:text-gray-600 font-bold"
          >
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
    </nav>
  </header>
)
