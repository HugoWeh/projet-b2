import { Footer } from "@/components/Footer"
import { Header } from "@/components/Header"

const App = () => (
  <div className="flex flex-col bg-purple-600 h-screen">
    <Header />
    <div className="flex flex-col p-4 gap-4 items-center">
      <h1 className="text-4xl">Ajouter une adresse</h1>
      <div className="bg-yellow-400 w-1/3 rounded p-2">
        <h1>Nouvelle adresse</h1>
        <input type="text" />
      </div>
    </div>
    <Footer />
  </div>
)

export default App
