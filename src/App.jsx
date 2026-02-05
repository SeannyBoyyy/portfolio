import Header from './components/Header'
import About from './components/About'
import Experience from './components/Experience'
import WorkExperience from './components/WorkExperience'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Seminars from './components/Seminars'
import Contact from './components/Contact'
import ParticleBackground from './components/ParticleBackground'
import { useTheme } from './context/ThemeContext'

function App() {
  const { isDark } = useTheme()
  
  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDark 
        ? 'bg-[#111111] text-white' 
        : 'bg-[#f5f5f5] text-gray-900'
    }`}>
      <ParticleBackground />
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-8">
        {/* Header/Profile Section */}
        <Header />
        
        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-6">
          {/* Left Column */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <About />
            <Skills />
            <div className="flex-1">
              <Projects />
            </div>
          </div>
          
          {/* Right Column */}
          <div className="flex flex-col gap-4">
            <WorkExperience />
            <Experience />
            <Seminars />
            <div className="flex-1">
              <Contact />
            </div>
          </div>
        </div>
        
        {/* Footer */}
        <footer className={`mt-8 pt-6 border-t text-center ${
          isDark ? 'border-zinc-800' : 'border-gray-200'
        }`}>
          <p className={`text-xs ${isDark ? 'text-zinc-400' : 'text-gray-400'}`}>
            © 2025 Sean Richard Sakamoto. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  )
}

export default App
