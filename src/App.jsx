import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./component/Card";


const App = () => {
  const [pokemonName, setPokemonName] = useState("");
  const [pokemonChosen, setPokemonChosen] = useState(false);
  const [pokemon, setPokemon] = useState({
    name: "",
    species: "",
    image: "",
    hp: "",
  });

  const searchPokemon = () => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).then((res) =>
      setPokemon({
        name: res.data.name,
        species: res.data.species.name,
        image: res.data.sprites.front_default,
        hp: res.data.stats[0].base_stat,
      })
    );

    setPokemonChosen(true);
  };
  return (
    <>
      <div className="app">
        <div className="TitleSection">
          <h1>Pokemon app</h1>
          <input type="text" onChange={(e) => setPokemonName(e.target.value)} />
          <button onClick={searchPokemon}>Search</button>
        </div>
      </div>
      <div className="displaySection">
        {pokemonChosen ? (
          <>
            <Card pokemon={pokemon} />
          </>
        ) : (
          <h1>Please Chose a Pokemon</h1>
        )}
      </div>
    </>
  );
};

export default App;
