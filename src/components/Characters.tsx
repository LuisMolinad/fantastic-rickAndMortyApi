import { useEffect } from "react"
import { useAllCharactersStore } from "../stores/AllCharacters"

const Characters = () => {
  const { characters, fetchCharacters, loading } = useAllCharactersStore()

  useEffect(() => {
    fetchCharacters()
  }, [])
  
  if (loading) return <p>Cargando...</p>

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {characters.map((char) => (
        <div
          key={char.id}
          className="bg-gray-800 rounded p-3"
        >
          <img src={char.image} alt={char.name} />
          <p className="mt-2">{char.name}</p>
        </div>
      ))}
    </div>
  )
}

export default Characters
