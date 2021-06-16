export type PokemonTypeProps =
  | 'normal'
  | 'fire'
  | 'water'
  | 'electric'
  | 'grass'
  | 'ice'
  | 'fighting'
  | 'poison'
  | 'ground'
  | 'flying'
  | 'psychic'
  | 'bug'
  | 'rock'
  | 'ghost'
  | 'dragon'
  | 'steel'
  | 'fairy'
  | 'curse'
  | 'dark'

type ListType = {
  [key: string]: string
}

const PokemonType: React.FC<{ type: PokemonTypeProps }> = ({ type }) => {
  const listType: ListType = {
    normal: '#aa9',
    fire: '#f42',
    water: '#39f',
    electric: '#fc3',
    grass: '#7c5',
    ice: '#6cf',
    fighting: '#b54',
    poison: '#a59',
    ground: '#db5',
    flying: '#89f',
    psychic: '#f59',
    bug: '#ab2',
    rock: '#ba6',
    ghost: '#66b',
    dragon: '#754',
    steel: '#aab',
    fairy: '#e9e',
    curse: '#698',
    dark: '#754',
  }

  if (!type) return <> </>

  const selectedColor = listType[type.toLowerCase()]

  return (
    <span
      className="inline-flex items-center px-3 py-0.5 font-semibold rounded-full text-sm   text-white"
      style={{ backgroundColor: selectedColor, textShadow: '1px 1px #5e5e5e' }}
    >
      {type}
    </span>
  )
}

export default PokemonType
