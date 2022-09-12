import { useState } from "react";
import { Pokemon, Sprites } from "../types/pokemonTypes";
import PokemonImage from "./PokemonImage";

type Props = {
  pokemon: Pokemon | null
};

const SearchResult = ({ pokemon }: Props) => {
  if (!pokemon) return null;

  const official = pokemon.sprites.other?.["official-artwork"]?.front_default ?? null;
  const sprite = pokemon.sprites.front_default ?? null;
  const spriteShiny = pokemon.sprites.front_shiny ?? null;
  const dreamWorld = pokemon.sprites.other?.dream_world?.front_default ?? null;
  const home = pokemon.sprites.other?.home?.front_default ?? null;
  const homeShiny = pokemon.sprites.other?.home?.front_shiny ?? null;

  const [img, setImg] = useState(official || '');

  console.log('img:', img)


  return (
    <div className='flex items-center justify-center space-y-2 bg-yellow-100'>
      <PokemonImage 
        name={pokemon?.name} 
        imgUrl={img} 
        sprites={pokemon?.sprites} 
      />
      <div className="bg-purple-300 h-full">
        <h2 className="text-3xl capitalize">
          {pokemon?.name}
        </h2>
        <p>Index number: {pokemon.poke_id}</p>
        <ul>
          {pokemon.types.map(t => (<li key={t.slot}>{t.type}</li>))}
        </ul>

        <ul className="flex flex-wrap gap-2">
          <button className="p-1 bg-slate-300 rounded" onClick={() => setImg(official)} disabled={img === official}>Official</button>
          <button className="p-1 bg-slate-300 rounded" onClick={() => setImg(sprite)} disabled={img === sprite}>Sprite</button>
          <button className="p-1 bg-slate-300 rounded" onClick={() => setImg(spriteShiny)} disabled={img === spriteShiny}>Shiny Sprite</button>
          <button className="p-1 bg-slate-300 rounded" onClick={() => setImg(dreamWorld)} disabled={img === dreamWorld}>Dream World</button>
          <button className="p-1 bg-slate-300 rounded" onClick={() => setImg(home)} disabled={img === home}>Home</button>
          <button className="p-1 bg-slate-300 rounded" onClick={() => setImg(homeShiny)} disabled={img === homeShiny}>Shiny Home</button>
        </ul>
      </div>
    </div>
  );
}

export default SearchResult;