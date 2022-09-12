import type { NextPage } from 'next';
import { useSession } from 'next-auth/react';
import { useState } from 'react';
import { trpc } from '../utils/trpc';

import { requireAuth } from '../utils/requireAuth';

export const getServerSideProps = requireAuth(async (ctx) => {
  return { props: {} };
})

const Search: NextPage = () => {
  const { data } = useSession();
  const [search, setSearch] = useState('');
  const [results, setResults] = useState<null | Pokemon>(null);

  
  type Pokemon = {
    name: string,
    poke_id: number,
    sprites: {
      front_default: string
    },
    types: Array<PokemonType>
  };

  const mapPokemon = (p: any): Pokemon => {
    const pokemon: Pokemon = {
      name: p.name,
      poke_id: p.id,
      sprites: p.sprites,
      types: getTypes(p.types)
    } 
    return pokemon;
  }

  type PokemonType = {
    slot: number,
    type: string,
  };

  const getTypes = (types: Array<any>): [PokemonType] => {
    const pokemonTypes: [PokemonType] = types.map(p => ({
      slot: p.slot,
      type: p.type.name,
    }))
    return pokemonTypes;
  }

  const searchForPokemon = async () => {
    const token = search.toLowerCase();
    try {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${token}`);
      const data = await res.json();

      const pokemon = mapPokemon(data);
      console.log(pokemon);

      setResults(pokemon);
      setSearch('');

    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      Search
      <p>{JSON.stringify(data, null, 2)}</p>
     
      <div className='bg-emerald-200 p-3 rounded space-x-3'>
        <input className='p-2' type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
        <button 
          className='bg-emerald-400 rounded p-2'
          onClick={searchForPokemon}
        >
          Search
        </button>
      </div>
      <div>
        <h2>{results?.name}</h2>
        <p>id: {results?.poke_id}</p>
        <img src={results?.sprites?.front_default || ''} alt={results?.name || 'pokemon sprite'} />
      </div>
    </div>
  );
}

export default Search;