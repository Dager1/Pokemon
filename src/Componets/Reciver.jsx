import React from "react";

function Reciver({ poke }) {
  return (
    <div style={{ textAlign: "center" }}>
      <ul style={{ listStyle: "none", padding: 0, border: "2px solid black" }}>
        <li>
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${poke.id}.png`}
            alt={poke.name}
            style={{ width: "200px" }}
          />
        </li>
        <li style={{ fontSize: "1.2rem", marginBottom: "1rem" }}>
          {poke.name}
        </li>
      </ul>
    </div>
  );
}

export default Reciver;
