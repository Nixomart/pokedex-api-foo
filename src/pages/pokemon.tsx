import { useEffect, useState } from "react";
import { usePokemons } from "../context/pokemonsProvider";
import { useNavigate, useParams } from "react-router-dom";
import { FaArrowCircleLeft } from "react-icons/fa";
import axios from "axios";
import Loading from "../components/Loading";
import Errors from "../components/Errors";

export default function PokemonPage() {
  const { pokemons } = usePokemons();
  const [pokemon, setPokemon] = useState<any | null>(null);
  const { pokemonname } = useParams();
  const [error, setError] = useState(false);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    if (pokemons.length !== 0) {
      const pokemonFound = pokemons.find(
        (pokemon: any) => pokemon.name === pokemonname
      );
      console.log("No hay que buscar ya esta en context");
      console.log("pokemonPage: ", pokemonFound);

      setPokemon(pokemonFound);
      setLoaded(true);
    } else {
      axios
        .get(`https://pokeapi.co/api/v2/pokemon/${pokemonname}`)
        .then((data) => {
          console.log(data.data);

          setPokemon(data.data);
          setError(false);
          setLoaded(true);
        })
        .catch(() => {
          setError(true);
          setLoaded(true);
        });
      console.log("hay que buscar!");
    }
  }, []);
  const navigate = useNavigate();
  return loaded === false ? (
    <Loading />
  ) : error === true ? (
    <Errors error={2} />
  ) : (
    <section className="w-screen  h-screen text-white from-green-500 to-green-700 bg-gradient-to-b ">
      <div
        onClick={() => navigate("/")}
        className="  space-x-3 text-white h-[10%] items-center flex text-xl  pl-60 "
      >
        <div className=" hover:underline hover:cursor-pointer flex items-center  w-max space-x-3">
          <FaArrowCircleLeft />

          <p>Volver</p>
        </div>
      </div>
      <div className="flex h-[50%] lg:flex lg:flex-col ">
        <div className="w-1/2 lg:w-full  mt-auto mx-auto ">
          <p className="text-4xl font-extrabold text-center ">#{pokemon.id}</p>
          <h1 className="text-7xl text-center lg:text-2xl ">{pokemon.name}</h1>
          <div className="lg:flex justify-center space-x-5">

          <div className=" pt-5 space-y-5">
            <p className="font-medium text-center">
              Altura:{" "}
              <span className="bg-red-500  px-3 text-white rounded-lg">
                {pokemon.height}
              </span>
            </p>
            <p className="font-medium text-center">
              Peso:{" "}
              <span className="bg-green-500  px-3 text-white rounded-lg">
                {pokemon.weight}
              </span>
            </p>
          </div>
          <div className="text-center pt-5">
            <p className="font-semibold">Habilidades: </p>
            {pokemon.abilities.map((h: any) => (
              <p>{h.ability.name}</p>
            ))}
          </div>
          </div>

        </div>
        <div className="w-1/2 lg:w-full mt-auto ">
          <img
            className="w-96 lg:w-60 lg:mx-auto hover:drop-shadow-2xl transition-all ease-in-out"
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
            alt={pokemon.sprites.front_default}
          />
        </div>
      </div>
      <div className="h-[40%] flex items-center lg:flex lg:flex-col justify-around  ">
        <div className="w-1/2 text-center">
          <h2 className="text-5xl lg:text-xl lg:hidden font-bold">Stats </h2>
        </div>
        <div className=" w-1/2 justify-center pr-40 lg:pr-0">
          {pokemon.stats.map((stat: any, index: any) => (
            <div
              key={index}
              className="flex justify-between space-y-3 lg:space-y-0"
            >
              <h3 className="text-xl font-semibold">{stat.stat.name}</h3>
              <p className="text-lg">{stat.base_stat}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
