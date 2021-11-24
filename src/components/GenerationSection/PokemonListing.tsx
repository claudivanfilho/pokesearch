import { useState } from 'react';
import { TextField } from '@material-ui/core';
import { Search } from '@material-ui/icons';
import { useParams } from 'react-router-dom';

import { Resource } from '../../models/index';
import PokemonMiniCard from './PokemonMiniCard';

const PokemonListing = ({ pokemons = [] }: { pokemons: Resource[] }) => {
  const { pokemonName } = useParams();
  const [searchText, setSearchText] = useState('');
  const onSearch = (text: string) => {
    setSearchText(text);
  };
  const getFilteredPokemons = () => {
    return pokemons.filter((p) => p?.name.includes(searchText));
  };

  return (
    <div className="flex flex-col">
      <div className="w-full flex justify-between items-center">
        <div className="w-full mb-3 mt-2">
          <div className="flex items-center pr-2">
            <Search className="mt-4 mr-2" />
            <TextField
              onChange={(event: any) => onSearch(event.target.value)}
              id="input-with-icon-grid"
              label="Pesquise por um pokemon"
              className="w-full"
            />
          </div>
        </div>
      </div>
      <div
        style={{ height: 'calc(100vh - 350px)' }}
        className="flex flex-col lg:grid lg:grid-cols-3 auto-rows-min gap-4 overflow-y-auto pb-4"
      >
        {getFilteredPokemons().map((pokemon) => (
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
