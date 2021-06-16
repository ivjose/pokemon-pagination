import Image from 'next/image'

import { PokemonProps } from '@modules/Pokemons/types'

type Props = {
  pokemon: PokemonProps
  setSelectedPokemon(val: PokemonProps): void
  selectedPokemon: string | undefined
}

const GridItem: React.FC<Props> = ({ pokemon, setSelectedPokemon, selectedPokemon }) => {
  if (!pokemon) return null

  return (
    <a
      href="#"
      onClick={() => setSelectedPokemon(pokemon)}
      className={`relative flex items-center px-4 py-3 border border-gray-lightest rounded-lg shadow-sm  hover:border-yellow-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-yellow-400 ${
        selectedPokemon === pokemon.id ? 'bg-gray-dark' : 'bg-gray-lightest'
      }`}
    >
      <div className="flex-shrink-0">
        <div className="relative w-10 h-10 bg-whiterounded-full">
          <Image
            className="rounded-full"
            alt={`Pokemon ${pokemon.name}`}
            src={pokemon.image}
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>
      <div className="flex-1 min-w-0 ml-5">
        <div className="flex items-center space-x-3">
          <span className="text-sm font-medium text-yellow-400">{pokemon.number}</span>
          <h3 className="text-sm font-medium text-white truncate">{pokemon.name}</h3>
        </div>
      </div>
    </a>
  )
}

export default GridItem
