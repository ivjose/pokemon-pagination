import PokemonType, { PokemonTypeProps } from '@components/PokemonType'

type AttacksProps = {
  name: string
  type: PokemonTypeProps
  damage: number
}

type Props = {
  title: string
  attacks: AttacksProps[]
}
const PokemonsAttacks: React.FC<Props> = ({ attacks, title }) => {
  return (
    <table className="min-w-full my-5 divide-y divide-gray-200">
      <thead className="bg-gray-50">
        <tr>
          <th
            scope="col"
            colSpan={3}
            className="px-6 py-3 font-bold tracking-wider text-gray-700 uppercase text-md"
          >
            {title}
          </th>
        </tr>
      </thead>
      <thead className="bg-gray-50">
        <tr>
          <th
            scope="col"
            className="px-3 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
          >
            Name
          </th>
          <th
            scope="col"
            className="px-3 py-3 text-xs font-medium tracking-wider text-gray-500 uppercase"
          >
            Type
          </th>
          <th
            scope="col"
            className="px-3 py-3 text-xs font-medium tracking-wider text-gray-500 uppercase"
          >
            Damage
          </th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {attacks.map((attack) => (
          <tr key={attack.name}>
            <td className="w-1/3 px-3 py-2 text-sm text-left text-gray-500 whitespace-nowrap">
              {attack.name}
            </td>
            <td className="w-1/3 px-3 py-2 text-sm text-gray-500 whitespace-nowrap">
              <PokemonType type={attack.type} />
            </td>
            <td className="w-1/3 px-3 py-2 text-sm text-gray-500 whitespace-nowrap">
              {attack.damage}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default PokemonsAttacks
