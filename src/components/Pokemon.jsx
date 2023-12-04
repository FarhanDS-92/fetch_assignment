"use client";

import { useEffect, useState } from "react";

export default function Pokemon() {
  const [choosePokemon, setChoosePokemon] = useState("ditto");
  const [pokemon, setPokemon] = useState({});

  async function fetchPokemon() {
    const res = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${choosePokemon.toLowerCase()}`
    );
    const data = await res.json();

    setPokemon(data);
  }

  useEffect(() => {
    fetchPokemon();
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    fetchPokemon();
  }

  return (
    <div>
      <h2>Pokemon</h2>
      <p>
        Here's a pokemon api:
        <a href={`https://pokeapi.co/api/v2/pokemon/${choosePokemon}`}>
          {`https://pokeapi.co/api/v2/pokemon/${choosePokemon}`}
        </a>
      </p>
      <p>
        You have to replace the text "ditto" with the name of the pokemon you
        want to search for.
      </p>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder={choosePokemon}
          value={choosePokemon}
          onChange={(e) => setChoosePokemon(e.target.value)}
        />
        <button>Search</button>
      </form>

      <h3>{pokemon ? `${pokemon.name}` : ""}</h3>

      <img
        src={pokemon.sprites ? `${pokemon.sprites.front_default}` : ""}
        alt={choosePokemon}
      />
    </div>
  );
}
