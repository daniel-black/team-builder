import { PokemonTypeString } from "../types/pokemonTypes";

type Props = {
  pokemonType: PokemonTypeString,
};

const PokemonTypePill = ({ pokemonType }: Props): JSX.Element => {
  const typeNames = [
    'bug', 
    'dark',
    'dragon', 
    'electric',
    'fairy',
    'fighting',
    'fire',
    'flying',
    'ghost',
    'grass',
    'ground',
    'ice', 
    'normal', 
    'poison',
    'psychic',
    'rock',
    'steel',
    'water'
  ];

  return (
    <li 
      className={`${typeNames.find(t => t === pokemonType)} type-pill`}
    >
      {pokemonType}
    </li>
  )
}

export default PokemonTypePill;