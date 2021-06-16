import { gql } from '@apollo/client'

export const GET_ALL_POKEMON = gql`
  query GetAllPokemons($size: Int!) {
    pokemons(first: $size) {
      id
      number
      name
      image
      classification
      weight {
        minimum
        maximum
      }
      height {
        minimum
        maximum
      }
    }
  }
`

export const GET_POKEMON = gql`
  query GetPokemon($id: String!) {
    pokemon(id: $id) {
      id
      name
      classification
      types
      weaknesses
      image
      attacks {
        fast {
          name
          type
          damage
        }
        special {
          name
          type
          damage
        }
      }
      weight {
        minimum
        maximum
      }
      height {
        minimum
        maximum
      }
    }
  }
`
