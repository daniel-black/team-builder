import type { NextPage } from 'next';
import { useState } from 'react';
import Navbar from '../components/Navbar';
import { Pokemon } from '../types/pokemonTypes';

import { requireAuth } from '../utils/requireAuth';
import PokemonImage from '../components/PokemonImage';
import SearchBar from '../components/SearchBar';
import SearchResult from '../components/SearchResult';

export const getServerSideProps = requireAuth(async (ctx) => {
  return { props: {} };
});

const Dashboard: NextPage = () => {
  const [searchResult, setSearchResult] = useState<null | Pokemon>(null);
  const [team, setTeam] = useState<Array<Pokemon>>([]);

  console.log(team);

  const addPokemonToTeam = () => {
    if (!searchResult || team.length === 6) return;
    setTeam(team => [...team].concat(searchResult));
  }

  return (
    <div className='bg-emerald-50 h-screen flex flex-col space-y-5'>
      
      <Navbar />
      <SearchBar setSearchResult={(pokemon) => setSearchResult(pokemon)} />
      <SearchResult pokemon={searchResult} />

      <button 
          className='bg-sky-400 rounded-xl p-3 w-96 border-2 border-sky-600 hover:bg-sky-500'
          onClick={addPokemonToTeam}
        >
          Add <span className='capitalize'>{searchResult?.name}</span> to team!
        </button>

      <div className='grid grid-cols-3 gap-3 bg-slate-100'>
        <div className='h-20 w-20 rounded bg-blue-300'></div>
        <div className='h-20 w-20 rounded bg-blue-300'></div>
        <div className='h-20 w-20 rounded bg-blue-300'></div>
        <div className='h-20 w-20 rounded bg-blue-300'></div>
        <div className='h-20 w-20 rounded bg-blue-300'></div>
        <div className='h-20 w-20 rounded bg-blue-300'></div>
      </div>

    </div>
  );
}

export default Dashboard;