import { useState } from 'react'
import { useQuery } from '@apollo/client'

import { GET_ALL_POKEMON } from '@schema/pokemon'

import Pagination from '@components/Pagination'
import GridItem from '@components/GridItem'
import PokemonDetails from '@components/PokemonDetails'

import { PokemonProps } from './types'

const POKEMON_COUNT = 151
const PAGE_SIZE = 10

const Pokemons: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [selectedPokemon, setSelectedPokemon] = useState<PokemonProps | null>(null)

  const { data } = useQuery(GET_ALL_POKEMON, {
    variables: {
      size: POKEMON_COUNT,
    },
    fetchPolicy: 'cache-first',
  })

  const handleSelectPage = (event: React.FormEvent<HTMLAnchorElement>): void => {
    setCurrentPage(Number(event.currentTarget.id))
  }

  const pages = Array.from({ length: Math.ceil(POKEMON_COUNT / 10) }, (_, i) => i + 1)
  const indexOfLastPokemon = currentPage * PAGE_SIZE
  const indexOfFirstPokemon = indexOfLastPokemon - PAGE_SIZE
  const currentItems = data?.pokemons?.slice(indexOfFirstPokemon, indexOfLastPokemon)

  return (
    <>
      <aside className="flex flex-shrink-0">
        <div className="flex flex-col w-[508px]">
          <div className="flex flex-col flex-1 h-0 bg-gray-dark ">
            <div className="flex flex-col flex-1 px-6 py-10 overflow-y-auto">
              <nav className="flex-1 space-y-3 ">
                {currentItems?.map((pokemon: PokemonProps) => (
                  <GridItem
                    key={pokemon.id}
                    pokemon={pokemon}
                    selectedPokemon={selectedPokemon?.id}
                    setSelectedPokemon={setSelectedPokemon}
                  />
                ))}
              </nav>
            </div>
            <div className="flex flex-shrink-0 ">
              <Pagination
                handleSelectPage={handleSelectPage}
                pages={pages}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
              />
            </div>
          </div>
        </div>
      </aside>
      <div className="flex flex-col flex-1 w-0 overflow-hidden">
        <main className="relative z-0 flex-1 overflow-y-auto bg-gray focus:outline-none">
          <div className="px-6 py-5 border-b-2 border-gray-dark">
            <div className="flex items-center justify-between -mt-2 -ml-4 flex-nowrap">
              <div className="mt-2 ml-4">
                <h3 className="text-xl font-medium leading-6 text-white">
                  {selectedPokemon ? selectedPokemon?.name : 'Select your pokemon'}
                </h3>
              </div>
              <div className="flex-shrink-0 mt-2 ml-4">
                <span className="text-xl font-medium leading-6 text-yellow-400">
                  #{selectedPokemon && selectedPokemon?.number}
                </span>
              </div>
            </div>
          </div>
          <div className="p-6">
            <PokemonDetails selectedPokemon={selectedPokemon?.id} />
          </div>
        </main>
      </div>
    </>
  )
}

export default Pokemons
