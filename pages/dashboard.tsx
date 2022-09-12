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

      <div className='grid grid-cols-3 bg-slate-100 max-w-fit'>
        <div className='h-40 w-40 rounded'>
          {team[0] ? <PokemonImage name={team[0].name} imgUrl={team[0].sprites.front_default} sprites={team[0].sprites} /> : null}
        </div>
        <div className='h-40 w-40 rounded'>
          {team[1] ? <PokemonImage name={team[1].name} imgUrl={team[1].sprites.front_default} sprites={team[1].sprites} /> : null}
        </div>
        <div className='h-40 w-40 rounded'>
          {team[2] ? <PokemonImage name={team[2].name} imgUrl={team[2].sprites.front_default} sprites={team[2].sprites} /> : null}
        </div>
        <div className='h-40 w-40 rounded'>
          {team[3] ? <PokemonImage name={team[3].name} imgUrl={team[3].sprites.front_default} sprites={team[3].sprites} /> : null}
        </div>
        <div className='h-40 w-40 rounded'>
          {team[4] ? <PokemonImage name={team[4].name} imgUrl={team[4].sprites.front_default} sprites={team[4].sprites} /> : null}
        </div>
        <div className='h-40 w-40 rounded'>
          {team[5] ? <PokemonImage name={team[5].name} imgUrl={team[5].sprites.front_default} sprites={team[5].sprites} /> : null}
        </div>
      </div>

    </div>
  );
}

export default Dashboard;