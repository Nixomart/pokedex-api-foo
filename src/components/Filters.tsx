import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { usePokemons } from "../context/pokemonsProvider";
import { PiMagnifyingGlassLight } from "react-icons/pi";

export default function Filters() {
  const { pokemons, setPokemons, pokemonsOriginals } = usePokemons();
  
  const handleFilterWeight = (type: string) => {
    const sortedPokemons = [...pokemons];

    if (type === "asc") {
      sortedPokemons.sort((a, b) => a.weight - b.weight);
    } else if (type === "desc") {
      sortedPokemons.sort((a, b) => b.weight - a.weight);
    }

    setPokemons(sortedPokemons);
  };
  const handleFilterHeight = (type: string) => {
    const sortedPokemons = [...pokemons];

    if (type === "asc") {
      sortedPokemons.sort((a, b) => a.height - b.height);
    } else if (type === "desc") {
      sortedPokemons.sort((a, b) => b.height - a.height);
    }

    setPokemons(sortedPokemons);
  };
  const handleFilterId = (type: string) => {
    const sortedPokemons = [...pokemons];

    if (type === "asc") {
      sortedPokemons.sort((a, b) => a.order - b.order);
    } else if (type === "desc") {
      sortedPokemons.sort((a, b) => b.order - a.order);
    }

    setPokemons(sortedPokemons);
  };
  const handleSearchPokemon = (e:any) =>{
    e.preventDefault();
    const searchValue = e.target.value.toLowerCase()
    const pokemonsFiltered = pokemons.filter((pokemon:any)=>pokemon.name.toLowerCase().includes(searchValue))
    if (searchValue === "") {
      setPokemons(pokemonsOriginals)
    }else{
      setPokemons(pokemonsFiltered)
    }
  }
  return (
    <div className="py-5 grid grid-cols-7">
      <div className="col-span-3  w-5/6 shadow-lg rounded-xl flex items-center ">
        <input
        onChange={(e)=>handleSearchPokemon(e)}
          type="text"
          className="w-full focus:outline-none rounded-l-2xl h-full bg-white px-3 py-3 "
          placeholder="Buscar..."
        />
        <div className="bg-white  h-full flex items-center px-2 rounded-r-2xl">
        <PiMagnifyingGlassLight  />
        </div>
      </div>
      <div className="flex items-center">
        <p className="text-xl bg-gray-600 hover:bg-red-500 transition-all ease-in-out hover:cursor-default text-white px-3 shadow-lg rounded-lg">
          Tamaño
        </p>
        <div className="pl-2">
          <IoMdArrowDropup
            onClick={() => handleFilterHeight("asc")}
            className="text-xl hover:cursor-pointer"
          />
          <IoMdArrowDropdown
            onClick={() => handleFilterHeight("desc")}
            className="text-xl hover:cursor-pointer
          "
          />
        </div>
      </div>
      <div className="flex items-center">
        <p className="text-xl bg-gray-600  hover:bg-blue-500 transition-all ease-in-out hover:cursor-default text-white px-3 shadow-lg rounded-lg">
          Peso
        </p>
        <div className="pl-2">
          <IoMdArrowDropup
            onClick={() => handleFilterWeight("asc")}
            className="text-xl hover:cursor-pointer"
          />
          <IoMdArrowDropdown
            onClick={() => handleFilterWeight("desc")}
            className="text-xl hover:cursor-pointer
          "
          />
        </div>
      </div>
      <div className="flex items-center">
        <p className="text-xl bg-gray-600  hover:bg-indigo-500 transition-all ease-in-out hover:cursor-default text-white px-3 shadow-lg rounded-lg">
          Numero
        </p>
        <div className="pl-2">
          <IoMdArrowDropup
            onClick={() => handleFilterId("asc")}
            className="text-xl hover:cursor-pointer"
          />
          <IoMdArrowDropdown
            onClick={() => handleFilterId("asc")}
            className="text-xl hover:cursor-pointer
          "
          />
        </div>
      </div>
      <div className="items-center flex">
        <button
          onClick={() => setPokemons(pokemonsOriginals)}
          className="bg-slate-600 text-white px-3 py-2 rounded-lg hover:shadow-md hover:bg-slate-500"
        >
          Limpiar filtros
        </button>
      </div>
    </div>
  );
}
