import styles from './Skills.module.css'

const categories = [
  {
    name: 'Languages',
    skills: ['JavaScript', 'TypeScript', 'Python', 'Java', 'C', 'C++', 'Bash'],
  },
  {
    name: 'Frontend',
    skills: ['React', 'Angular', 'HTML / CSS'],
  },
  {
    name: 'Backend & DB',
    skills: ['Node.js', 'Express', 'MongoDB', 'REST APIs', 'gRPC'],
  },
  {
    name: 'AI / ML',
    skills: ['Fine-tuning', 'Unsloth', 'Ollama'],
  },
  {
    name: 'Security & Crypto',
    skills: ['Cryptography', 'TLS / OpenSSL', 'Network Security'],
  },
  {
    name: 'Tools',
    skills: ['Git', 'Linux', 'Docker', 'JIRA', 'Postman', 'Claude Code', 'Cursor'],
  },
  {
    name: 'Concepts',
    skills: ['Algorithms', 'Data Structures', 'OOP', 'SDD / Specs', 'Network Protocols (TCP/IP, UDP)'],
  },
]

export default function Skills() {
  return (
    <section id="skills">
      <p className="section-label">What I work with</p>
      <h2 className="section-title">Skills</h2>
      <div className={styles.grid}>
        {categories.map(({ name, skills }) => (
          <div key={name} className={styles.card}>
            <h3 className={styles.category}>{name}</h3>
            <ul className={styles.list}>
              {skills.map((s) => (
                <li key={s} className={styles.tag}>{s}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
