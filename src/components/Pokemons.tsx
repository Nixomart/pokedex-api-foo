import Pokemon from "./PokemonCard";

export default function Pokemons({ pokemons }: any) {
  return (
    <div className="grid-cols-3 pt-5 h-screen px-10 grid gap-10 ">
      {pokemons.map((pokemon: any, index:number) => (
       <Pokemon key={index} {...pokemon} />
      ))}
    </div>
  );
}
