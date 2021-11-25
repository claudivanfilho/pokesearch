import { TextField } from "@material-ui/core";
import { Search } from "@material-ui/icons";
import { useState } from "react";
import { useParams } from "react-router-dom";

import { Resource } from "../../models/index";
import PokemonMiniCard from "./PokemonMiniCard";

const PokemonListing = ({ pokemons = [] }: { pokemons: Resource[] }) => {
  const { pokemonName } = useParams();
  const [searchText, setSearchText] = useState("");
  const filteredPokemons = pokemons.filter((p) => p.name.includes(searchText));

  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between w-full">
        <div className="w-full mt-2 mb-3">
          <div className="flex items-center pr-2">
            <Search className="mt-4 mr-2" />
            <TextField
              onChange={(event) => setSearchText(event.target.value)}
              id="input-with-icon-grid"
              label="Search for a pokemon"
              className="w-full"
            />
          </div>
        </div>
      </div>
      <div
        style={{ height: "calc(100vh - 350px)" }}
        className="flex flex-col gap-4 pb-4 overflow-y-auto lg:grid lg:grid-cols-3 auto-rows-min"
      >
        {filteredPokemons.map((pokemon) => (
          <PokemonMiniCard
            key={pokemon.name}
            pokemon={pokemon}
            isSelected={pokemon.name === pokemonName}
          />
        ))}
      </div>
    </div>
  );
};

export default PokemonListing;
