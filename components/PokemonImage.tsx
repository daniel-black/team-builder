import { Sprites } from "../types/pokemonTypes";

type Props = {
  name?: string,
  imgUrl?: string,
  sprites?: Sprites,
  big?: boolean
};

const PokemonImage = ({name, imgUrl, sprites, big = false}: Props) => {

  if (!name || !sprites) return null;

  return (
      <img 
        className={`${big ? 'h-80' : 'h-40'} block group-hover:scale-105 duration-150 group-hover:skew-x-1 animate-popout`}
        src={imgUrl || sprites.front_default} 
        alt={name} 
      />

  );
}

export default PokemonImage;