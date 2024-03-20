import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { Nav } from "@/components/Nav"
import { Stars } from "@/components/Stars"
import { Address } from "@/components/Address"

const HomePage = () => (
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
        <Address value="Ouvert" />
        <Address value="Fermé" />
        <Address value="Fermé" />
        <Address value="Ouvert" />
        <Address value="Fermé" />
        <Address value="Ouvert" />
      </div>
    </div>
    <Footer />
  </>
)

export default HomePage
