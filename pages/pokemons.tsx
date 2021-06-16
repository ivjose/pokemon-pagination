import { NextPage, InferGetServerSidePropsType } from 'next'
import { initializeApollo, addApolloState } from '@lib/apolloClient'
import { GET_ALL_POKEMON } from '@schema/pokemon'
import Pokemons from '@modules/Pokemons'

const PokemonsPage: NextPage = () => {
  return (
    <section className="bg-gray-light">
      <div className="flex h-screen max-w-screen-xl p-20 mx-auto overflow-hidden">
        <Pokemons />
      </div>
    </section>
  )
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getServerSideProps: InferGetServerSidePropsType<any> = async () => {
  const apolloClient = initializeApollo()

  const { data } = await apolloClient.query({
    query: GET_ALL_POKEMON,
    variables: {
      size: 10,
    },
  })

  return addApolloState(apolloClient, {
    props: {
      pageData: data,
    },
  })
}

export default PokemonsPage
