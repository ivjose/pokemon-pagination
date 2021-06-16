import Image from 'next/image'
import { useQuery } from '@apollo/client'

import { GET_POKEMON } from '@schema/pokemon'

import PokemonType, { PokemonTypeProps } from '@components/PokemonType'
import PokemonsAttacks from '@components/PokemonsAttacks'

import DetailsPreload from '@components/DetailsPreload'

type Props = {
  selectedPokemon: string | undefined
}

const PokemonDetails: React.FC<Props> = ({ selectedPokemon }) => {
  const { data, loading } = useQuery(GET_POKEMON, {
    variables: {
      id: selectedPokemon,
    },
    fetchPolicy: 'cache-first',
    skip: !selectedPokemon,
  })

  if (!data || loading) return <DetailsPreload />

  return (
    <div>
      <div className="relative mx-auto h-[250px] w-auto">
        <Image
          alt={`Pokemon ${data.pokemon.name}`}
          src={data.pokemon.image}
          layout="fill"
          objectFit="contain"
        />
      </div>

      <div className="mt-5 text-center">
        <span className="text-xl font-semibold text-white">{data.pokemon.classification}</span>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div
            className={`relative flex flex-col items-center py-2 ${
              data.pokemon.weaknesses.length > 1 && ' space-x-3'
            } `}
          >
            <span className="text-sm font-semibold text-gray-400 uppercase">Type</span>
            <div className="mt-3 space-x-2 space-y-2">
              {data.pokemon.types.map((type: PokemonTypeProps) => (
                <PokemonType key={type} type={type} />
              ))}
            </div>
          </div>
          <div
            className={`relative flex flex-col items-center py-2 ${
              data.pokemon.weaknesses.length > 1 && ' space-x-3'
            } `}
          >
            <span className="text-sm text-gray-400 uppercase">Weaknesses</span>
            <div className="mt-3 space-x-2 space-y-2">
              {data.pokemon.weaknesses.map((weakness: PokemonTypeProps) => (
                <PokemonType key={weakness} type={weakness} />
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="relative flex flex-col items-center py-2 space-x-3">
            <span className="text-sm text-gray-400 uppercase">Weight</span>
            <div className="mt-3 space-x-2 space-y-2">
              <span className="text-xl font-semibold text-white">
                {data.pokemon.weight.minimum} - {data.pokemon.weight.maximum}
              </span>
            </div>
          </div>
          <div className="relative flex flex-col items-center py-2 space-x-3">
            <span className="text-sm text-gray-400 uppercase">Height</span>
            <div className="mt-3 space-x-2 space-y-2">
              <span className="text-xl font-semibold text-white">
                {data.pokemon.height.minimum} - {data.pokemon.height.maximum}
              </span>
            </div>
          </div>
        </div>

        <PokemonsAttacks title="Fast attack" attacks={data.pokemon.attacks.fast} />

        <PokemonsAttacks title="Fast Special" attacks={data.pokemon.attacks.special} />
      </div>
    </div>
  )
}

export default PokemonDetails
