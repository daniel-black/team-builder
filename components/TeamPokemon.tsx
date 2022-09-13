import { Pokemon } from "../types/pokemonTypes";
import PokemonImage from "./PokemonImage";

type Props = {
  pokemon: Pokemon | null,
  order: number,
};

const TeamPokemon = (props: Props): JSX.Element => {
  const { pokemon, order } = props;

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

  return (
    <div className='flex justify-center items-center h-40 w-40 rounded-xl bg-emerald-100 p-1 relative group'>
      <span className="absolute top-1 left-2 text-emerald-400 font-semibold">{order}</span>
      {renderContent()}
    </div>
  );
}

export default TeamPokemon;