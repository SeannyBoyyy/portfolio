import { useTheme } from '../context/ThemeContext'

function Experience() {
  const { isDark } = useTheme()

  const experiences = [
    {
      title: 'BS Information Technology',
      place: 'Lyceum of Subic Bay',
      period: '2022 — Present',
      description: '4th Year Student. Focus on web and mobile development, database systems, and software engineering.',
    },
    {
      title: 'Beyond the Basics: APIs',
      place: 'Lyceum of Subic Bay',
      period: '2025',
      description: 'Technical seminar on API integration and modern web development practices.',
    },
    {
      title: 'AI Nexus Conference',
      place: 'PSITE RAITE Central Luzon',
      period: '2023',
      description: 'Technology conference on AI and human integrity in software development.',
    },
  ]

  return (
    <section className={`py-10 border-t border-dashed transition-colors ${
      isDark ? 'border-zinc-800' : 'border-gray-200'
    }`}>
      <h2 className={`text-xs font-medium uppercase tracking-wider mb-6 ${
        isDark ? 'text-zinc-500' : 'text-gray-400'
      }`}>
        Experience & Education
      </h2>
      
      <div className="space-y-6">
        {experiences.map((exp) => (
          <div key={exp.title} className="grid grid-cols-[100px_1fr] gap-4">
            <span className={`text-sm ${isDark ? 'text-zinc-600' : 'text-gray-400'}`}>
              {exp.period}
            </span>
            <div>
              <h3 className={`font-medium text-sm ${isDark ? 'text-white' : 'text-gray-900'}`}>
                {exp.title}
              </h3>
              <p className={`text-sm ${isDark ? 'text-zinc-500' : 'text-gray-500'}`}>
                {exp.place}
              </p>
              <p className={`text-sm mt-1 ${isDark ? 'text-zinc-500' : 'text-gray-500'}`}>
                {exp.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience
