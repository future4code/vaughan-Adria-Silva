import axios from "axios";
import { useEffect, useState } from "react";
import PokeCard from "./components/PokeCard/PokeCard";

function App() {
  const [pokeList, setPokeList] = useState([]);
  const [pokeName, setPokeName] = useState("");

  useEffect(() => {
    getAllPokemons();
  }, []);

  const getAllPokemons = async () => {
    try {
      const response = await axios.get("https://pokeapi.co/api/v2/pokemon/?limit=151");
      setPokeList(response.data.results);
    } catch (err) {
      console.log(err);
    };
  };

  const changePokeName = (event) => {
    setPokeName(event.target.value);
    console.log(pokeName)
  };

  return (
    <div>
      <select onChange={changePokeName}>
          <option value={""}>Nenhum</option>
          {pokeList.map(pokemon => {
            return (
              <option key={pokemon.name} value={pokemon.name}>
                {pokemon.name}
              </option>
            );
          })}
        </select>
        {pokeName && <PokeCard pokemon={pokeName} />}
    </div>
  );
}

export default App;
