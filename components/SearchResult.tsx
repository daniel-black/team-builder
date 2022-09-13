import { Pokemon } from "../types/pokemonTypes";
import PokemonImage from "./PokemonImage";

type Props = {
  pokemon: Pokemon | null,
};

const SearchResult = ({ pokemon }: Props) => {
  if (!pokemon) return null;

  const official = pokemon.sprites.other?.["official-artwork"]?.front_default;

  return (
    <div className='flex justify-center items-center px-2 bg-emerald-100/80 w-full'>
      <PokemonImage 
        name={pokemon?.name} 
        imgUrl={official} 
        sprites={pokemon?.sprites} 
        big={true}
      />
      <div className="px-3">
        <h2 className="text-3xl capitalize">
          {pokemon?.name}
        </h2>
        <p>Index number: {pokemon.poke_id}</p>
        <ul>
          {pokemon.types.map(t => (<li key={t.slot}>{t.type}</li>))}
        </ul>
      </div>
    </div>
  );
}

export default SearchResult;