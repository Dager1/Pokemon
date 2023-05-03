import axios from "axios";
import React, { useState } from "react";
import "./Style.css";

function PokiInput() {
  const [name, setName] = useState("");
  const [poki, setPoki] = useState("");

  const searchPokemon = async (e) => {
    e.preventDefault();
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`
    );
    setPoki(response.data);
  };

  return (
    <div>
      <form onSubmit={searchPokemon}>
        <div>
          <label>Enter the pokemon</label>
        </div>
        <input value={name} onChange={(e) => setName(e.target.value)} />
        <div>
          <button type="submit" className="button">
            Search
          </button>
        </div>
      </form>
      {poki && (
        <div>
          <h1>{poki.name.toUpperCase()}</h1>
          <img
            src={poki.sprites.front_default}
            alt={poki.name}
            className="poster"
          />
          <div>Hp:{poki.stats[0].base_stat}</div>
          <div>Attack:{poki.stats[1].base_stat}</div>
          <div>Defence:{poki.stats[2].base_stat}</div>
          <div>Special-attack:{poki.stats[3].base_stat}</div>
          <div>Special-defence:{poki.stats[4].base_stat}</div>
          <div>Speed:{poki.stats[5].base_stat}</div>
        </div>
      )}
    </div>
  );
}

export default PokiInput;
