import { NextPage } from 'next'
import Login from '@modules/Login'

const HomePage: NextPage = () => {
  return (
    <section className="flex items-center justify-center min-h-screen px-4 py-12 bg-gray-darkest sm:px-6 lg:px-8">
      <Login />
    </section>
  )
}

export default HomePage
