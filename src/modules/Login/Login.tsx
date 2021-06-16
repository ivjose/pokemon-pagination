import { useState } from 'react'

import { useLoginAuth } from '@contexts/LoginAuthContexts'
import AlertDisplay from '@components/AlertDisplay'

const Login: React.FC = () => {
  const [userCredentials, setUserCredentials] = useState({
    username: '',
    password: '',
  })

  const [errorFields, setErrorFields] = useState({
    username: '',
    password: '',
  })

  const { authLogin, ...authDetails } = useLoginAuth()

  const updateField = async (name: string, value: string): Promise<void> => {
    const valueRemoveSpaces = value.replace(/\s/g, '')
    setUserCredentials((prevState) => ({ ...prevState, [name]: valueRemoveSpaces }))

    updateErrors(name, valueRemoveSpaces)
  }

  const checkError = (name: string, value: string): string => {
    let errorMessage = ''

    const emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (!value) {
      errorMessage = 'This is a Requred Field'
    }

    if (name === 'username') {
      if (!emailFormat.test(value)) {
        errorMessage = 'Incorrect Email format'
      }
    }

    return errorMessage
  }

  const updateErrors = async (name: string, value: string): Promise<void> => {
    const error = checkError(name, value)

    setErrorFields((prevState) => ({ ...prevState, [name]: error }))
  }

  const handleSubmit = (e: React.SyntheticEvent): void => {
    e.preventDefault()
    // authLogin({ ...userCredentials })

    const propertyNames = Object.entries(userCredentials)
    const errorCheck = []

    propertyNames.forEach(([name, value]) => {
      updateErrors(name, value)
      const error = checkError(name, value)
      if (error) errorCheck.push({ name, error: error })
    })

    if (errorCheck.length > 1) {
      return
    }

    if (!errorFields.username && !errorFields.password) {
      authLogin({ ...userCredentials })
    }
  }

  return (
    <div className="w-full max-w-md px-5 py-10 space-y-8 rounded-md bg-gray-dark sm:py-20 sm:px-14">
      {authDetails.error && <AlertDisplay status="error" message={authDetails.error} />}
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 sr-only">
            Email address
          </label>
          <div className="mt-1">
            <input
              value={userCredentials.username}
              onChange={(e) => updateField('username', e.target.value)}
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="Enter your email address here"
              className="block w-full px-3 py-2 text-base text-white placeholder-gray-300 border rounded-md shadow-sm appearance-none bg-gray border-gray sm:text-lg sm:px-6 sm:py-4 focus:outline-none focus:ring-yellow-400 focus:border-yellow-400"
            />
          </div>

          {errorFields.username && (
            <p className="mt-2 text-sm text-red-600" id="email-error">
              {errorFields.username}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 sr-only">
            Password
          </label>
          <div className="mt-1">
            <input
              value={userCredentials.password}
              onChange={(e) => updateField('password', e.target.value)}
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              placeholder="Enter your password here"
              className="block w-full px-3 py-2 text-base text-white placeholder-gray-300 border rounded-md shadow-sm appearance-none border-gray bg-gray sm:text-lg sm:px-6 sm:py-4 focus:outline-none focus:ring-yellow-400 focus:border-yellow-400"
            />
          </div>
          {errorFields.password && (
            <p className="mt-2 text-sm text-red-600" id="email-error">
              {errorFields.password}
            </p>
          )}
        </div>

        <div>
          <button
            type="submit"
            className="flex justify-center w-full px-3 py-2 text-base font-medium text-white bg-yellow-400 border border-transparent rounded-md shadow-sm sn:text-xl sm:px-6 sm:py-4 hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
          >
            LOGIN
          </button>
        </div>
      </form>
    </div>
  )
}

export default Login
