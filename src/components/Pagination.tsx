import { useState } from 'react'

type Props = {
  getNext?(): void
  getPrevious?(): void
  pages: number[]
  handleSelectPage(event: any): void
  currentPage: number
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>
}

const Pagination: React.FC<Props> = ({ pages, handleSelectPage, currentPage, setCurrentPage }) => {
  const [pageNumberLimit] = useState(5)
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5)
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0)

  const handlePrevBtn = (): void => {
    setCurrentPage((prevPage) => prevPage - 1)
    if ((currentPage - 1) % pageNumberLimit === 0) {
      setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit)
      setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit)
    }
  }
  const handleNextBtn = (): void => {
    setCurrentPage((prevPage) => prevPage + 1)
    if (currentPage + 1 > maxPageNumberLimit) {
      setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit)
      setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit)
    }
  }

  return (
    <nav
      className="flex items-center justify-between w-full px-4 py-4 bg-gray-darkest sm:px-4"
      aria-label="Pagination"
    >
      <div className="hidden sm:block">
        <nav
          className="relative z-0 inline-flex space-x-2 rounded-md shadow-sm"
          aria-label="Pagination"
        >
          {/* {minPageNumberLimit >= 1 && (
            <a
              href="#"
              aria-current="page"
              className="relative z-10 inline-flex rounded-md items-center px-2.5 py-1 text-sm text-white bg-gray-dark hover:bg-gray-800  "
            >
              &hellip;
            </a>
          )} */}
          {pages?.map((number) => {
            if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
              return (
                <a
                  key={number}
                  href="#"
                  id={`${number}`}
                  onClick={handleSelectPage}
                  aria-current="page"
                  className={`relative z-10 inline-flex rounded-md items-center px-2.5 py-1 text-sm text-white bg-gray-dark hover:bg-gray-800 ${
                    currentPage === number && 'bg-white text-gray-dark hover:bg-gray-500'
                  }`}
                >
                  {number}
                </a>
              )
            }
            return null
          })}

          {/* {pages.length >= maxPageNumberLimit && (
            <a
              href="#"
              aria-current="page"
              className="relative z-10 inline-flex rounded-md items-center px-2.5 py-1 text-sm text-white bg-gray-dark hover:bg-gray-800  "
            >
              &hellip;
            </a>
          )} */}
        </nav>
      </div>
      <div className="flex justify-between flex-1 sm:justify-end">
        <button
          disabled={currentPage <= 1}
          type="button"
          className={`relative inline-flex items-center px-4 py-1 text-sm text-white rounded-md bg-gray-dark hover:bg-gray-800 ${
            currentPage <= 1 && 'cursor-not-allowed bg-gray-800'
          }`}
          onClick={handlePrevBtn}
        >
          Previous
        </button>
        <button
          type="button"
          disabled={currentPage >= 16}
          className={`relative inline-flex items-center px-4 py-1 ml-3 text-sm text-white rounded-md bg-gray-dark hover:bg-gray-800 ${
            currentPage >= 16 && 'cursor-not-allowed bg-gray-800'
          }`}
          onClick={handleNextBtn}
        >
          Next
        </button>
      </div>
    </nav>
  )
}

export default Pagination
