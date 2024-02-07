import { useNavigate } from "react-router-dom";

export default function Pokemon(pokemon: any) {
  const navigate = useNavigate();
  const handleSeePokemon = () => {
    navigate(`/${pokemon.name}`);
  };
  return (
    <div
      onClick={handleSeePokemon}
      className="col-span-1 bg-gray-200 rounded-xl grayscale hover:grayscale-0 hover:cursor-pointer justify-between hover:shadow-xl hover:drop-shadow-xl items-center flex shadow-sm p-5 hover:scale-110 transition-all ease-in-out "
    >
      <div>
        <p className="text-xl font-extrabold">#{pokemon.id}</p>
        <h1 className="text-black text-2xl font-bold">{pokemon.name}</h1>
        <div>
          <p className="font-medium">
            Altura:{" "}
            <span className="bg-red-500  px-3 text-white rounded-lg">
              {pokemon.height}
            </span>
          </p>
          <p className="font-medium">
            Peso:{" "}
            <span className="bg-green-500  px-3 text-white rounded-lg">
              {pokemon.weight}
            </span>
          </p>
        </div>
      </div>
      <div className="relative  bg-white/40  h-32 w-32 rounded-full">
        
        <img
          className="w-52  -top-16  fixed -right-5   "
          src={pokemon.sprites.front_default}
        />
      </div>
    </div>
  );
}
