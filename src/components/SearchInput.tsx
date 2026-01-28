

import { useSearchStore } from '../stores/SearchStore'

export default function SearchInput() {
  const { searchTerm, setSearchTerm, clearSearch } = useSearchStore()

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
  }

  const handleClear = () => {
    clearSearch()
  }

  return (
    <div className="mb-6 flex gap-2">
      <input
        type="text"
        placeholder="Buscar personajes..."
        value={searchTerm}
        onChange={handleSearch}
        className="flex-1 px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200"
      />
      <button
        onClick={handleClear}
        className="px-6 py-2 bg-red-500 hover:bg-red-600 dark:bg-red-700 dark:hover:bg-red-800 text-white rounded-lg font-medium transition-colors duration-200"
      >
        Limpiar
      </button>
    </div>
  )
}
 