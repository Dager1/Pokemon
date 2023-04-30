import React from "react";

function Disp({ poki }) {
  return (
    <div>
      <lu>
        <li key={poki.name}>{poki.name}</li>
        <li>
          <img
            ref={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${poki.id}.png`}
          />
        </li>
      </lu>
    </div>
  );
}

export default Disp;
