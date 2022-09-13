import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Pokemon } from '../types/pokemonTypes';
import { mapPokemon } from '../utils/pokemonUtils';

type Props = {
  setSearchResult: (pokemon: Pokemon) => void,
};

const SearchBar = ({ setSearchResult }: Props) => {
  const [search, setSearch] = useState('');
  const [notFound, setNotFound] = useState(false);

  const searchForPokemon = async () => {
    const token = search.toLowerCase();
    try {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${token}`);
      const data = await res.json();
      const pokemon = mapPokemon(data);
      setSearchResult(pokemon);
    } catch (err) {
      console.log(err);
      setNotFound(true);
    }
  };

  type FormValues = { name: string };
  const { register, handleSubmit } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = searchForPokemon;

  return (
    <div className='flex flex-col items-center justify-center space-y-2 text-emerald-800'>
      <h1 className='text-3xl'>Build your team!</h1>
      <form 
        className='text-xl'
        onSubmit={handleSubmit(onSubmit)}
      >
        <input 
          {...register('name')}
          type="text" 
          placeholder='pikachu' 
          spellCheck={false}
          className='p-2 rounded-l-full text-center w-52 outline-none shadow border border-emerald-400'
          value={search}
          onFocus={(e) => {
            setNotFound(false);
            setSearch('');
          }}
          onChange={(e) => setSearch(e.currentTarget.value)}
        />
        <button 
          className='bg-emerald-400 rounded-r-full p-2 shadow border border-emerald-400 outline-none hover:bg-emerald-500 focus:bg-emerald-500' 
          type='submit'
        >
          Search
        </button>
      </form>
      {notFound && <p>Uh oh, couldn't find <span className='font-bold'>{search}</span>!</p>}
    </div>
  );
}

export default SearchBar;