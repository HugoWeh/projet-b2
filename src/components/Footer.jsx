import Link from "next/link"

export const Footer = () => (
  <footer className="flex flex-row justify-between p-4 gap-4 w-full bg-slate-300 bottom-0 fixed items-center">
    <Link href="/" className="text-2xl font-semibold">
      Accueil
    </Link>
    <div className="text-gray-600">
      © {new Date().getFullYear()} AddMaps
    </div>
  </footer>
)

export default Footer
