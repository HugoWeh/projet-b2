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
          <div className="justify-around border-t-2 border-black p-2 mb-2">
            <h1 className="text-2xl text-center">Avis</h1>
            <ul className="flex flex-row justify-around">
              <Stars />
            </ul>
          </div>
        </div>
        <div className="flex flex-row w-5/6">
          <div className="rounded border-2 border-black m-4 p-4">
            <div className="p-2 text-center text-2xl font-semibold">
              Nos adresses
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex odio
              non consectetur quasi corporis ad illo blanditiis omnis,
              exercitationem autem, impedit illum! Nulla voluptatem dignissimos
              nesciunt provident, consectetur saepe mollitia.
            </p>
          </div>
          <div className="rounded border-2 border-black m-4 p-4">
            <div className="p-2 bg-white text-center text-2xl font-semibold">
              Nos adresses
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex odio
              non consectetur quasi corporis ad illo blanditiis omnis,
              exercitationem autem, impedit illum! Nulla voluptatem dignissimos
              nesciunt provident, consectetur saepe mollitia.
            </p>
          </div>
          <div className="rounded border-2 border-black m-4 p-4">
            <div className="p-2 bg-white text-center text-2xl font-semibold">
              Nos adresses
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex odio
              non consectetur quasi corporis ad illo blanditiis omnis,
              exercitationem autem, impedit illum! Nulla voluptatem dignissimos
              nesciunt provident, consectetur saepe mollitia.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
