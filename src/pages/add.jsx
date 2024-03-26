import { Footer } from "@/components/Footer"
import { Header } from "@/components/Header"

const App = () => (
  <div className="flex flex-col bg-purple-600 h-screen">
    <Header />
    <div className="flex flex-col p-4 gap-4 items-center">
      <h1 className="text-4xl">Ajouter une adresse</h1>
      <div className="bg-yellow-400 w-1/3 rounded p-2">
        <select name="type" id="type" className="font-semibold rounded">
          <option value="restaurant" className="font-semibold">
            Restaurant
          </option>
          <option value="hotel" className="font-semibold">
            Hôtel
          </option>
          <option value="musee" className="font-semibold">
            Musée
          </option>
          <option value="bar" className="font-semibold">
            Bar
          </option>
        </select>
        <h1>Nouvelle adresse</h1>
        <input type="text" />
      </div>
    </div>
    <Footer />
  </div>
)

export default App
