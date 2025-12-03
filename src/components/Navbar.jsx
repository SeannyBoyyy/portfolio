import { useTheme } from '../context/ThemeContext'
import { FiSun, FiMoon } from 'react-icons/fi'

function Navbar() {
  const { isDark, toggleTheme } = useTheme()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className={`max-w-[680px] mx-auto px-6 transition-colors duration-300 ${
        isDark ? 'bg-[#0a0a0a]' : 'bg-white'
      }`}>
        <div className="flex items-center justify-between h-16">
          <a href="#" className={`text-sm font-medium transition-colors ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            sean.
          </a>

          <div className="flex items-center gap-6">
            <a href="#work" className={`text-sm transition-colors link-underline ${
              isDark ? 'text-zinc-400 hover:text-white' : 'text-gray-500 hover:text-gray-900'
            }`}>work</a>
            <a href="#about" className={`text-sm transition-colors link-underline ${
              isDark ? 'text-zinc-400 hover:text-white' : 'text-gray-500 hover:text-gray-900'
            }`}>about</a>
            <a href="#contact" className={`text-sm transition-colors link-underline ${
              isDark ? 'text-zinc-400 hover:text-white' : 'text-gray-500 hover:text-gray-900'
            }`}>contact</a>
            
            <button
              onClick={toggleTheme}
              className={`p-1.5 rounded-md transition-colors ${
                isDark ? 'text-zinc-400 hover:text-white' : 'text-gray-500 hover:text-gray-900'
              }`}
              aria-label="Toggle theme"
            >
              {isDark ? <FiMoon className="w-4 h-4" /> : <FiSun className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
