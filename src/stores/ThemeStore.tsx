import { create } from 'zustand'

type Theme = 'light' | 'dark'

interface ThemeState {
  theme: Theme
  toggleTheme: () => void
  setTheme: (theme: Theme) => void
}

export const useThemeStore = create<ThemeState>((set) => {
  // Obtener tema inicial del localStorage o preferencia del sistema
  const getSavedTheme = (): Theme => {
    const saved = localStorage.getItem('theme') as Theme | null
    if (saved) return saved
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  }

  const initialTheme = getSavedTheme()

  return {
    theme: initialTheme,
    toggleTheme: () =>
      set((state) => {
        const newTheme = state.theme === 'light' ? 'dark' : 'light'
        localStorage.setItem('theme', newTheme)
        return { theme: newTheme }
      }),
    setTheme: (theme: Theme) => {
      localStorage.setItem('theme', theme)
      set({ theme })
    },
  }
})


