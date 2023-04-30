import axios from "axios";
import React, { useEffect, useState } from "react";
import Disp from "./Disp";

function PokiInput() {
  const [name, setName] = useState("");
  const [poki, setPoki] = useState("");

  useEffect(() => {
    if (name) {
      axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`).then((rep) => {
        setPoki(rep.data);
        console.log(rep.data);
      });
    }
  }, [name]);

  return (
    <div>
      <form>
        <div>
          <label>Enter the pokemon</label>
        </div>
        <input value={name} onChange={(e) => setName(e.target.value)} />
      </form>
      <Disp poki={poki} />
    </div>
  );
}

export default PokiInput;
