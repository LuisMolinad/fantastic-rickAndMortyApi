import React from "react";
import { useEffect } from "react";
import { useAllCharactersStore } from "../stores/AllCharacters";
import CharacterCard  from "./CharacterCard";

const Characters = () => {
  const { characters, fetchCharacters, loading } = useAllCharactersStore()

  useEffect(() => {
    fetchCharacters()
  }, [])
  
  if (loading) {
    return (
    <div className="text-center text-lg font-medium text-body">
      Cargando personajes...
    </div>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
      {characters.map((char) => (
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
  )
}

export default Characters
