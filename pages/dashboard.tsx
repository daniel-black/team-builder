import type { NextPage } from 'next';
import { useState } from 'react';
import Navbar from '../components/Navbar';
import { Pokemon } from '../types/pokemonTypes';
import { useForm, SubmitHandler } from 'react-hook-form';

import { requireAuth } from '../utils/requireAuth';
import PokemonImage from '../components/PokemonImage';
import SearchBar from '../components/SearchBar';

export const getServerSideProps = requireAuth(async (ctx) => {
  return { props: {} };
});

const Dashboard: NextPage = () => {
  const [searchResult, setSearchResult] = useState<null | Pokemon>(null);
  const [team, setTeam] = useState<Array<Pokemon>>([]);

  console.log(searchResult);

  const addPokemonToTeam = () => {
    if (!searchResult) return;
    setTeam(team => [...team, searchResult]);
  }

  return (
    <div className='bg-emerald-50 h-screen flex flex-col space-y-5'>
      <Navbar />
      
      <SearchBar setSearchResult={(pokemon) => setSearchResult(pokemon)} />
      <div className='flex flex-col items-center justify-center space-y-2'>
        <PokemonImage name={searchResult?.name} sprites={searchResult?.sprites} />
        <button 
          className='bg-sky-400 rounded-xl p-3 w-96 border-2 border-sky-600 hover:bg-sky-500'
          onClick={addPokemonToTeam}
        >
          Add <span className='capitalize'>{searchResult?.name}</span> to team!
        </button>
      </div>

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