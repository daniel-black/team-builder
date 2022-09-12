export type Pokemon = {
  name: string,
  poke_id: number,
  sprites: Sprites,
  types: Array<PokemonType>
};

export type PokemonType = {
  slot: number,
  type: string,
};

export type Sprites = {
  back_default?: string,
  back_female?: string,
  back_shiny?: string,
  back_shiny_female?: string,
  front_default?: string,
  front_default_female?: string,
  front_shiny?: string,
  front_shiny_female?: string,
  other?: {
    dream_world?: {
      front_default?: string,
      front_female?: string,
    },
    home?: {
      front_default?: string,
      front_female?: string,
      front_shiny?: string,
      front_shiny_female?: string,
    },
    "official-artwork"?: {
      front_default?: string
    } 
  }
};