import { Routes, Route } from 'react-router-dom'
import { useThemeStore } from './stores/ThemeStore'
import Home from './pages/Home.tsx'
import ThemeSwitch from './components/ThemeSwitch'

export default function App() {
  const theme = useThemeStore((state) => state.theme)

  return (
    <div className={theme === 'dark' ? 'dark' : 'light'}>
      <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        <nav className="bg-gray-100 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 flex justify-end p-4 transition-colors duration-300">
          <ThemeSwitch />
        </nav>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
      </div>
    </div>
  )
}