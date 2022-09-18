import { Pokemon } from "../types/pokemonTypes";
import PokemonImage from "./PokemonImage";
import PokemonTypePill from "./PokemonTypePill";

type Props = {
  pokemon: Pokemon | null,
};

const SearchResult = ({ pokemon }: Props) => {
  const official = pokemon?.sprites.other?.["official-artwork"]?.front_default;

  const renderSearchContent = () => {
    if (!pokemon) return <img src="/pokeball.png" alt="pokeball" className="py-3" />;

    return (
     <>
      <PokemonImage 
        name={pokemon?.name} 
        imgUrl={official} 
        sprites={pokemon?.sprites} 
        big={true}
      />
      <div className="px-3 space-y-2">
        <div className="flex items-center space-x-2">
          <h2 className="text-3xl capitalize">{pokemon?.name}</h2>
          <p className="opacity-50">(No. {pokemon.poke_id})</p>
        </div>
        
        <ul className="flex space-x-1">
          {pokemon.types.map(t => (
            <PokemonTypePill pokemonType={t.type} key={t.slot} />
          ))}
        </ul>
      </div>
     </>
    );
  }

  return (
    <div className='flex justify-center items-center px-2 bg-emerald-100/80 w-full'>
      {renderSearchContent()}
    </div>
  );
}

export default SearchResult;