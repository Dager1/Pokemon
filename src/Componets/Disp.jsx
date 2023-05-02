import React from "react";

function Disp({ pokemon }) {
  return (
    <div>
      <lu>
        <li key={pokemon.name}>{pokemon.name}</li>
        <li>
          <img
            ref={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
          />
        </li>
      </lu>
    </div>
  );
}

export default Disp;
