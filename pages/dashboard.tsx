import type { NextPage } from 'next';
import { useState } from 'react';
import Navbar from '../components/Navbar';
import { Pokemon } from '../types/pokemonTypes';

import { requireAuth } from '../utils/requireAuth';
import SearchBar from '../components/SearchBar';
import SearchResult from '../components/SearchResult';
import TeamPokemon from '../components/TeamPokemon';

export const getServerSideProps = requireAuth(async (ctx) => {
  return { props: {} };
});

const Dashboard: NextPage = () => {
  const [searchResult, setSearchResult] = useState<null | Pokemon>(null);

  const [p1, setP1] = useState<Pokemon | null>(null);
  const [p2, setP2] = useState<Pokemon | null>(null);
  const [p3, setP3] = useState<Pokemon | null>(null);
  const [p4, setP4] = useState<Pokemon | null>(null);
  const [p5, setP5] = useState<Pokemon | null>(null);
  const [p6, setP6] = useState<Pokemon | null>(null);

  console.log(`p1: ${p1}`);
  console.log(`p2: ${p2}`);
  console.log(`p3: ${p3}`);
  console.log(`p4: ${p4}`);
  console.log(`p5: ${p5}`);
  console.log(`p6: ${p6}`);

  const [teamSize, setTeamSize] = useState(0);

  const addPokemonToTeam = () => {
    if (teamSize >= 6) return;
    switch (teamSize) {
      case 0:
        setP1(searchResult);
        break;
      case 1:
        setP2(searchResult);
        break;
      case 2: 
        setP3(searchResult);
        break;
      case 3:
        setP4(searchResult);
        break;
      case 4: 
        setP5(searchResult);
        break;
      case 5:
        setP6(searchResult);
        break;
    }
    setTeamSize(teamSize + 1);
  }

  return (
    <div className='bg-emerald-50 h-full min-h-screen flex flex-col items-center space-y-4 pb-10'>
      
      <Navbar />
      <SearchBar setSearchResult={(pokemon) => setSearchResult(pokemon)} />
      <SearchResult pokemon={searchResult} />

      {searchResult && (
        <button 
          className='bg-sky-400 text-sky-900 rounded-full p-2 w-72 border text-xl border-sky-600 hover:bg-sky-500'
          onClick={addPokemonToTeam}
        >
          Add <span className='capitalize'>{searchResult?.name}</span> to team!
        </button>
      )}


      <div className='grid grid-cols-3 max-w-fit mb-20 gap-0.5'>
        <TeamPokemon pokemon={p1} order={1} deletePokemon={() => setP1(null)} />
        <TeamPokemon pokemon={p2} order={2} deletePokemon={() => setP2(null)} />
        <TeamPokemon pokemon={p3} order={3} deletePokemon={() => setP3(null)} />
        <TeamPokemon pokemon={p4} order={4} deletePokemon={() => setP4(null)} />
        <TeamPokemon pokemon={p5} order={5} deletePokemon={() => setP5(null)} />
        <TeamPokemon pokemon={p6} order={6} deletePokemon={() => setP6(null)} />
      </div>

    </div>
  );
}

export default Dashboard;