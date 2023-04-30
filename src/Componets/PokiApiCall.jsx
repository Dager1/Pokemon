import axios from "axios";
import { useEffect, useState } from "react";
import Reciver from "./Reciver";

const pokis = ["pikachu", "charmander", "squirtle", "bulbasaur", "eevee"];

function PokiApiCall() {
  const [poki, setPoki] = useState([]);

  useEffect(() => {
    // Use Promise.all to make multiple API calls in parallel
    Promise.all(
      pokis.map((poki) =>
        axios.get(`https://pokeapi.co/api/v2/pokemon/${poki}`).then(
          (rep) => rep.data // Return the data from the API call
        )
      )
    ).then((pokiData) => {
      setPoki(pokiData); // Set the state with an array of data from all API calls
    });
  }, [pokis]);

  return (
    <div>
      <div>
        {/* Add a "key" prop to the child component to remove the warning */}
        {poki.map((poke) => (
          <Reciver key={poke.id} poke={poke} />
        ))}
      </div>
    </div>
  );
}
export default PokiApiCall;
