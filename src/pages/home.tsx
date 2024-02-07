import Errors from "../components/Errors";
import Pokemons from "../components/Pokemons";
import { usePokemons } from "../context/pokemonsProvider";
import Filters from "../components/Filters";
import Loading from "../components/Loading";

export default function Home() {
  const {pokemons, loaded, error} = usePokemons()
  console.log("error en page home: ", error);
  
  return !loaded  ? (
    <Loading />
  ) : error !== 0 ? <Errors error={error} /> :  (
    <div className="bg-gray-50 space-y-10 px-10">
      <h1 className="text-4xl items-center font-bold">Pokemons</h1>
      <Filters />
      <Pokemons pokemons={pokemons} />
      
    </div>
  );
}
