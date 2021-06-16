import { createContext, useContext, useState, useMemo } from 'react'
import { useRouter } from 'next/router'

type Props = {
  username: string
  password: string
}

type ContextType = {
  username: string
  password: string
  error: string
  authLogin(value: Props): void
  logout(): void
}

const LoginAuth = createContext<ContextType | null>(null)

const defaultValue = {
  username: '',
  password: '',
}

const useLoginAuth = (): ContextType => {
  const context = useContext(LoginAuth)

  if (!context) {
    throw new Error('useLoginAuth must be use within Login Auth Provider')
  }

  return context
}

const userList = [
  {
    username: 'admin@email.com',
    password: '12345',
  },
  {
    username: 'user@email.com',
    password: '12345',
  },
]

const LoginAuthProvider: React.FC = (props) => {
  const [userLogin, setUserLogin] = useState<Props>(defaultValue)
  const [error, setError] = useState('')
  const router = useRouter()

  const value = useMemo(() => {
    const authLogin = (value: Props): void => {
      const authCheck = userList.find(
        (user) => user.username === value.username && user.password === value.password
      )

      if (authCheck) {
        setUserLogin({ ...authCheck })
        setError('')
        router.push('/pokemons')
      } else {
        setError('Invalid Credentials')
      }
    }
    const logout = (): void => {
      setUserLogin(defaultValue)
    }

    return {
      ...userLogin,
      error,
      authLogin,
      logout,
    }
  }, [userLogin, error])
  return <LoginAuth.Provider value={value} {...props} />
}

export { LoginAuthProvider, useLoginAuth }
