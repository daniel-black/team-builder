import { Sprites } from "../types/pokemonTypes";

type Props = {
  name?: string,
  imgUrl: string | null,
  sprites?: Sprites
};

const PokemonImage = ({name, imgUrl, sprites}: Props) => {

  if (!name || !sprites) return null;

  return (
    <div 
      className="w-96 h-96 bg-slate-200 max-w-fit p-2 rounded-3xl border-2 border-slate-700"
    >
      <img 
        className="w-96 h-96"
        src={imgUrl || sprites.front_default} 
        alt={name} 
      />
    </div>
  );
}

export default PokemonImage;