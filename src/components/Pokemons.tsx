import Pokemon from "./PokemonCard";

export default function Pokemons({ pokemons }: any) {
  return (
    <div className="lg:grid-cols-2 pt-5 grid-cols-3 h-screen px-10 grid gap-10 ">
      {pokemons.map((pokemon: any, index:number) => (
       <Pokemon key={index} {...pokemon} />
      ))}
    </div>
  );
}
