import axios from "axios";
import { useEffect, useState } from "react"

export default function PokeCard(props) {
    const [pokemon, setPokemon] = useState({});

    useEffect(() => {
        getPokemonByName(props.pokemon)
    }, [props.pokemon]);

    const getPokemonByName = async (pokeName) => {
        try {
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`);
            setPokemon(response.data);
        } catch (err) {
            console.log(err);
        };
    };

    return (
        <div>
        <p>{pokemon.name}</p>
        <p>{pokemon.weight} Kg</p>
        {pokemon.types && <p>{pokemon.types[0].type.name}</p>}
        {pokemon.sprites && (
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        )}
      </div>
    )
}