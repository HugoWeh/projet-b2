import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { Stars } from "@/components/Stars";

const HomePage = () => {
  return (
    <div className="h-screen">
      <Header />
      <div className="flex flex-row">
        <div className="flex-col border-r border-black h-fit w-1/6">
          <ul className="flex-col bg-gray-200">
            <Nav />
          </ul>
          <div className="flex-col justify-around border-t-2 border-black p-2 mb-2">
            <h1 className="text-2xl text-center">Avis</h1>
            <ul className="flex flex-row justify-around">
              <Stars />
            </ul>
          </div>
        </div>
        <div className="flex-col">
          <div className="flex-col rounded  w-fit border-2 border-black m-4 p-4 h-fit">
            <div className="p-4 text-center text-2xl font-semibold">
              Nos adresses
            </div>
            <p className="p-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex odio
              non consectetur quasi corporis ad illo blanditiis omnis,
              exercitationem autem, impedit illum! Nulla voluptatem dignissimos
              nesciunt provident, consectetur saepe mollitia.
            </p>
          </div>
          <div className="flex-col rounded  w-fit border-2 border-black m-4 p-4 h-fit">
            <div className="p-4 bg-white text-center text-2xl font-semibold">
              Nos adresses
            </div>
            <p className="p-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex odio
              non consectetur quasi corporis ad illo blanditiis omnis,
              exercitationem autem, impedit illum! Nulla voluptatem dignissimos
              nesciunt provident, consectetur saepe mollitia.
            </p>
          </div>
          <div className="flex-col rounded  w-fit border-2 border-black m-4 p-4 h-fit">
            <div className="p-4 bg-white text-center text-2xl font-semibold">
              Nos adresses
            </div>
            <p className="p-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex odio
              non consectetur quasi corporis ad illo blanditiis omnis,
              exercitationem autem, impedit illum! Nulla voluptatem dignissimos
              nesciunt provident, consectetur saepe mollitia.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
