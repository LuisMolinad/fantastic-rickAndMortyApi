import { create } from "zustand"
import { persist } from "zustand/middleware"
import type { Character, Characters } from "../types/Character"
import { fetchAllCharacters } from "../services/api"

interface AllCharactersState {
  characters: Character[]
  info: Characters["info"] | null
  loading: boolean
  error: string | null

  fetchCharacters: () => Promise<void>
  clearCharacters: () => void
}

export const useAllCharactersStore = create<AllCharactersState>()(
  persist(
    (set) => ({
      characters: [],
      info: null,
      loading: false,
      error: null,

      fetchCharacters: async () => {
        try {
          set({ loading: true, error: null })

          const data = await fetchAllCharacters()
          
          set({
            characters: data.results,
            info: data.info,
            loading: false,
          })
        } catch (error) {
          set({
            error: "Error al cargar personajes",
            loading: false,
          })
        }
      },

      clearCharacters: () => {
        set({ characters: [], info: null })
      },
    }),
    {
      name: "all-characters-storage", //  clave en localStorage
    }
  )
)
