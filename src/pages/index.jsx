import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { Stars } from "@/components/Stars";

const HomePage = () => {
  return (
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
        <div className="flex flex-wrap items-center w-full">
          <div className="rounded basis-11/12 border-2 border-black m-2 mr-0 p-2">
            <div className="p-2 text-2xl font-semibold">Nos adresses</div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex odio
              non consectetur quasi corporis ad illo blanditiis omnis,
              exercitationem autem, impedit illum! Nulla voluptatem dignissimos
              nesciunt provident, consectetur saepe mollitia.
            </p>
          </div>
          <p className="bg-green-600 text-white p-4 rounded-r font-semibold">
            Ouvert
          </p>
          <div className="rounded basis-11/12 border-2 border-black m-2 mr-0 p-2">
            <div className="p-2 bg-white text-2xl font-semibold">
              Nos adresses
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex odio
              non consectetur quasi corporis ad illo blanditiis omnis,
              exercitationem autem, impedit illum! Nulla voluptatem dignissimos
              nesciunt provident, consectetur saepe mollitia.
            </p>
          </div>
          <p className="bg-red-600 text-white p-4 rounded-r font-semibold">
            Fermé
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
