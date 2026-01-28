import { useEffect, useMemo } from "react";
import { useAllCharactersStore } from "../stores/AllCharacters";
import { useSearchStore } from "../stores/SearchStore";
import CharacterCard  from "./CharacterCard";

const Characters = () => {
  const { characters, fetchCharacters, loading } = useAllCharactersStore()
  const searchTerm = useSearchStore((state) => state.searchTerm)

  useEffect(() => {
    fetchCharacters()
  }, [fetchCharacters])
  
  // Filtrar personajes basado en el término de búsqueda
  const filteredCharacters = useMemo(() => {
    if (!searchTerm.trim()) return characters
    
    return characters.filter((char) =>
      char.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
  }, [characters, searchTerm])
  
  if (loading) {
    return (
    <div className="text-center text-lg font-medium text-body">
      Cargando personajes...
    </div>
    )
  }

  return (
    <div>
      {filteredCharacters.length === 0 && (
        <div className="text-center text-lg font-medium text-gray-500 dark:text-gray-400 py-8">
          No se encontraron personajes para "{searchTerm}"
        </div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
        {filteredCharacters.map((char) => (
          <CharacterCard 
            key={char.id}
            id={char.id}
            name={char.name}
            image={char.image}
            url={char.url}
            status={char.status}
            species={char.species}
          />
        ))}
      </div>
    </div>
  )
}

export default Characters
