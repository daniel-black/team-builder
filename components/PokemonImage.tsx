import { Sprites } from "../types/pokemonTypes";

type Props = {
  name?: string,
  sprites?: Sprites
};

const PokemonImage = ({name, sprites}: Props) => {

  if (!name || !sprites) return null;

  return (
    <div className="w-96 h-96 bg-slate-200 max-w-fit p-2 rounded-3xl border-2 border-slate-700">
      <h2 className="text-2xl font-bold text-center capitalize">{name}</h2>
      <img src={sprites.other?.["official-artwork"]?.front_default || sprites.front_default} alt={name} />
    </div>
  );
}

export default PokemonImage;