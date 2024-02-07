import axios from "axios";
import React, { useState, createContext, useEffect } from "react";

export const Pokemons = createContext<any | null>(null);

export function PokemonsProvider(props:any) {
  const [pokemons, setPokemons] = useState<any | null>([]);
  const [pokemonsOriginals, setPokemonsOriginals] = useState<any | null>([]);
  const [loaded, setLoaded] = useState(false)
  const [error, setError] = useState(0);

  const getPokemons = async(limit: any = 10) => {
    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=${limit}`);
  
      const results = await Promise.all(
        response.data.results.map(async (pokemon: any) => {
          try {
            const pokemonDetails = await axios.get(pokemon.url);
            return pokemonDetails.data; // Retorna los detalles del Pokémon
          } catch (error:any) {
            // Manejar errores específicos para cada solicitud de Pokemon
            console.error(`Error obteniendo detalles para ${pokemon.name}: ${error.message}`);
            throw error;
          }
        })
      );
  
      // Aquí puedes almacenar o loguear los resultados
      /* console.log('Pokémon Details:', results); */
    setPokemons(results)
    setPokemonsOriginals(results)
    setLoaded(true)
    } catch (error:any) {
      console.error('Error obteniendo la lista de Pokémon:', error.message);
      setLoaded(true)
      setError(1)
      // Puedes usar setErrors(1) si es necesario
    }
  };

  useEffect(() => {
    getPokemons();
  }, []);

  /* const value = useMemo(() => ({ usuario, setUsuario, cargando, setCargando }), [usuario, cargando]); */
  return (
    <Pokemons.Provider value={{pokemons, setPokemons, getPokemons, loaded, setLoaded, pokemonsOriginals, error, setError}}>{props.children}</Pokemons.Provider>
  );
}

export function usePokemons() {
  const context = React.useContext(Pokemons);
  if (context === undefined) {
    throw new Error("usePokemons must be used within a UserContextProvider");
  }
  return context;
}