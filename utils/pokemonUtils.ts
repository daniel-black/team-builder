import { Pokemon, PokemonType } from "../types/pokemonTypes";

export const getTypes = (types: Array<any>): [PokemonType] => {
  const pokemonTypes: [PokemonType] = types.map(p => ({
    slot: p.slot,
    type: p.type.name,
  }))
  return pokemonTypes;
}

export const mapPokemon = (pokemon: any): Pokemon => {
  const mappedPokemon: Pokemon = {
    name: pokemon.name,
    poke_id: pokemon.id,
    sprites: pokemon.sprites,
    types: getTypes(pokemon.types)
  } 
  return mappedPokemon;
}