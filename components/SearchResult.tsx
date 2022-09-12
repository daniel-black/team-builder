import { useState } from "react";
import { Pokemon, Sprites } from "../types/pokemonTypes";
import PokemonImage from "./PokemonImage";

type Props = {
  pokemon: Pokemon | null
};

const SearchResult = ({ pokemon }: Props) => {
  const [img, setImg] = useState(pokemon?.sprites.other?.["official-artwork"]?.front_default || '');

  if (!pokemon) return null;

  const official = pokemon.sprites.other?.["official-artwork"]?.front_default ?? null;
  const sprite = pokemon.sprites.front_default ?? null;
  const spriteShiny = pokemon.sprites.front_shiny ?? null;
  const dreamWorld = pokemon.sprites.other?.dream_world?.front_default ?? null;
  const home = pokemon.sprites.other?.home?.front_default ?? null;
  const homeShiny = pokemon.sprites.other?.home?.front_shiny ?? null;


  return (
    <div className='flex justify-center items-center px-10'>
      <PokemonImage 
        name={pokemon?.name} 
        imgUrl={img} 
        sprites={pokemon?.sprites} 
        big={true}
      />
      <div className="px-3 w-96">
        <h2 className="text-3xl capitalize">
          {pokemon?.name}
        </h2>
        <p>Index number: {pokemon.poke_id}</p>
        <ul>
          {pokemon.types.map(t => (<li key={t.slot}>{t.type}</li>))}
        </ul>

        <ul className="flex flex-wrap gap-2">
          <button className={`py-0.5 px-3 rounded-full shadow ${img === official ? 'bg-slate-500' : 'bg-slate-300'}`} onClick={() => setImg(official)} disabled={img === official}>Official</button>
          <button className={`py-0.5 px-3 rounded-full shadow ${img === sprite ? 'bg-slate-500' : 'bg-slate-300'}`} onClick={() => setImg(sprite)} disabled={img === sprite}>Sprite</button>
          <button className={`py-0.5 px-3 rounded-full shadow ${img === spriteShiny ? 'bg-slate-500' : 'bg-slate-300'}`} onClick={() => setImg(spriteShiny)} disabled={img === spriteShiny}>Shiny Sprite</button>
          <button className={`py-0.5 px-3 rounded-full shadow ${img === dreamWorld ? 'bg-slate-500' : 'bg-slate-300'}`} onClick={() => setImg(dreamWorld)} disabled={img === dreamWorld}>Dream World</button>
          <button className={`py-0.5 px-3 rounded-full shadow ${img === home ? 'bg-slate-500' : 'bg-slate-300'}`} onClick={() => setImg(home)} disabled={img === home}>Home</button>
          <button className={`py-0.5 px-3 rounded-full shadow ${img === homeShiny ? 'bg-slate-500' : 'bg-slate-300'}`} onClick={() => setImg(homeShiny)} disabled={img === homeShiny}>Shiny Home</button>
        </ul>
      </div>
    </div>
  );
}

export default SearchResult;