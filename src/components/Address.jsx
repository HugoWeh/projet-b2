import clsx from "clsx"

export const Address = ({ value }) => (
  <div className="flex flex-row m-2 mr-0 items-center">
    <div className="rounded basis-11/12 border-2 border-black p-2">
      <h1 className="p-2 text-2xl font-bold">Nos adresses</h1>
      <p className="text-justify p-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex odio non
        consectetur quasi corporis ad illo blanditiis omnis, exercitationem
        autem, impedit illum! Nulla voluptatem dignissimos nesciunt provident,
        consectetur saepe mollitia.
      </p>
      <button className="p-2 m-2 rounded bg-blue-600 text-white">
        Afficher les détails
      </button>
    </div>
    <p
      className={clsx("text-white p-4 rounded-r font-semibold", {
        "bg-green-600": value === "Ouvert",
        "bg-red-600": value === "Fermé",
      })}
    >
      {value}
    </p>
  </div>
)
