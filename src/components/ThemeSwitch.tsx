import { useThemeStore } from '../stores/ThemeStore'

export default function ThemeSwitch() {
  const theme = useThemeStore((state) => state.theme)
  const toggleTheme = useThemeStore((state) => state.toggleTheme)

  return (
    <button
      onClick={toggleTheme}
      className="rounded-lg p-2.5 text-sm text-gray-600 transition-colors duration-200 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-yellow-400"
      aria-label="Cambiar tema"
    >
      {theme === 'light' ? (
        <svg
          className="h-5 w-5 transition-transform duration-200 hover:rotate-12"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
        </svg>
      ) : (
        <svg
          className="h-5 w-5 transition-transform duration-200 hover:rotate-45"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4.293 2.293a1 1 0 011.414 0l.707.707a1 1 0 11-1.414 1.414l-.707-.707a1 1 0 010-1.414zm2.828 4.293a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zm-10.586 0a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM6.707 14.707a1 1 0 011.414 0l.707.707a1 1 0 11-1.414 1.414l-.707-.707a1 1 0 010-1.414zm2.828 4.293a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zm10.586 0a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM10 18a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zm-4.293-2.293a1 1 0 011.414 0l.707.707a1 1 0 11-1.414 1.414l-.707-.707a1 1 0 010-1.414zM2.707 5.707a1 1 0 011.414 0l.707.707a1 1 0 11-1.414 1.414L2.707 7.121a1 1 0 010-1.414zM10 5a1 1 0 011 1v1a1 1 0 11-2 0V6a1 1 0 011-1z"
            clipRule="evenodd"
          ></path>
        </svg>
      )}
    </button>
  )
}
