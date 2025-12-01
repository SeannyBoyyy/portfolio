import { createContext, useContext, useState, useEffect } from 'react'

const ThemeContext = createContext()

// Initialize theme immediately to prevent flash
const getInitialTheme = () => {
  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem('theme')
    const isDark = saved ? saved === 'dark' : false
    // Apply dark class immediately
    if (isDark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    return isDark
  }
  return false
}

export function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(getInitialTheme)

  useEffect(() => {
    localStorage.setItem('theme', isDark ? 'dark' : 'light')
    if (isDark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDark])

  const toggleTheme = () => setIsDark(!isDark)

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)
