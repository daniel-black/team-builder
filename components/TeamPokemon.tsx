import { Pokemon } from "../types/pokemonTypes";
import PokemonImage from "./PokemonImage";

type Props = {
  pokemon: Pokemon | null,
  order: number,
  deletePokemon: () => void;
};

const TeamPokemon = (props: Props): JSX.Element => {
  const { pokemon, order, deletePokemon } = props;

  const renderContent = (): JSX.Element => {
    if (!pokemon) {
      return (
        <img 
          src="/pokeball.png" 
          alt="pokeball"
          className="w-10 h-10" 
        />
      );
    }

    return (
      <PokemonImage
        name={pokemon.name} 
        imgUrl={pokemon.sprites.front_default} 
        sprites={pokemon.sprites} 
      />
    );
  }

  const renderDeleteButton = (): JSX.Element | null => {
    if (!pokemon) return null;
    return (
      <button 
        onClick={deletePokemon}
        className="z-10 absolute top-1 right-2 text-rose-100 w-5 h-5 rounded-full bg-rose-400 opacity-0 font-thin group-hover:opacity-100 flex items-center justify-center duration-75 shadow"
      >X</button>
    );
  }

  return (
    <div className='flex justify-center items-center h-40 w-40 rounded-xl bg-emerald-100 p-1 relative group'>
      <span className="absolute top-1 left-2 text-emerald-400 font-semibold">{order}</span>
      {renderDeleteButton()}
      {renderContent()}
    </div>
  );
}

export default TeamPokemon;