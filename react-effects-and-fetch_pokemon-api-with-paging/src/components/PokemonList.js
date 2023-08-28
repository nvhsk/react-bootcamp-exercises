import { useEffect, useState } from "react";

export default function PokemonList() {
  const [pokemon, setPokemon] = useState({ results: [] });
  const [id, setId] = useState("https://pokeapi.co/api/v2/pokemon?offset=0");

  useEffect(() => {
    async function loadPokemon() {
      try {
        const response = await fetch(id);
        const data = await response.json();
        // setPokemon(data.results);
        setPokemon(data);
      } catch (error) {
        console.log(error);
      }
    }

    loadPokemon();
  }, [id]);

  return (
    <main>
      <button type="button" onClick={() => setId(pokemon.previous)}>
        Previous Page
      </button>
      <button type="button" onClick={() => setId(pokemon.next)}>
        Next Page
      </button>
      <ul>
        {pokemon.results.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </main>
  );
}
