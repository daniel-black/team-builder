import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Pokemon } from '../types/pokemonTypes';
import { mapPokemon } from '../utils/pokemonUtils';

type Props = {
  setSearchResult: (pokemon: Pokemon) => void,
};

const SearchBar = ({ setSearchResult }: Props) => {
  const [search, setSearch] = useState('');

  const searchForPokemon = async () => {
    const token = search.toLowerCase();
    try {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${token}`);
      const data = await res.json();
      const pokemon = mapPokemon(data);
      setSearchResult(pokemon);
    } catch (err) {
      console.log(err);
    }
  };

  type FormValues = { name: string };
  const { register, handleSubmit } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = searchForPokemon;

  return (
    <div className='flex flex-col items-center justify-center'>
      <h1 className='text-3xl'>Build your team!</h1>
      <form 
        className='space-x-3'
        onSubmit={handleSubmit(onSubmit)}
      >
        <input 
          {...register('name')}
          type="text" 
          placeholder='pikachu' 
          className='p-3 rounded'
          value={search}
          onChange={(e) => setSearch(e.currentTarget.value)}
        />
        <button className='bg-emerald-400 rounded p-3' type='submit'>
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchBar;