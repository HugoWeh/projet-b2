import Link from "next/link";

export const Header = () => {
  return (
    <header className="flex flex-row w-full justify-between bg-slate-300 p-4 gap-4 items-center">
      <h1 className="text-2xl font-semibold">Onini</h1>
      <ul className="flex flex-row gap-24">
        <li className="hover:bg-slate-100 hover:rounded-2xl font-bold">
          <button className="hover:p-2 p-2">Accueil</button>
        </li>
        <li className="hover:bg-slate-100 hover:rounded-2xl font-bold">
          <button className="hover:p-2 p-2">Ajouter</button>
        </li>
        <li className="hover:bg-slate-100 hover:rounded-2xl font-bold">
          <button className="hover:p-2 p-2">Supprimer</button>
        </li>
      </ul>
      <input
        type="search"
        placeholder="Rechercher..."
        className="p-1 rounded"
      />
      <button className="p-2 text-white hover:bg-red-400 bg-red-600 active:bg-white active:text-red-600">
        Se connecter
      </button>
    </header>
  );
};
