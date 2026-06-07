import styles from './Projects.module.css'

const projects = [
  {
    title: 'Butchery Label & Production System',
    description:
      "Full-stack automated label printing and production tracking tool for Schneider's butchery. Engineered dynamic TSPL template generation for thermal printers with direct Windows Spooler API integration, automated Excel reports via ExcelJS and node-cron. Boosted packaging productivity by 25% and saved the client 45,000 NIS annually.",
    tech: ['React', 'Node.js', 'Express', 'ExcelJS', 'Windows Spooler API'],
    githubs: [],
    live: null,
  },
  {
    title: 'CIDR Research Platform',
    description:
      'Full-stack web application for the Hebrew University of Jerusalem (CIDR), replacing a legacy Google Sheets-based system. Built backend APIs and a dedicated website from scratch, delivering a customized database interface that improved organizational access to information.',
    tech: ['React', 'Express', 'MongoDB', 'REST API'],
    githubs: [],
    live: 'https://democracy-website.vercel.app/',
  },
  {
    title: 'Shift Manager',
    description:
      'Modern shift management application enabling seamless scheduling coordination between employees and managers. Features employee availability requests with custom shift hours, manager consolidated request view, and interactive schedule maker with 24-hour coverage visualization. Integrates with Express/Node.js backend hosted on Render.',
    tech: ['React', 'Express', 'REST API', 'Render', 'MongoDB'],
    githubs: [
      { name: 'Frontend', url: 'https://github.com/yoav235/shift-manger-react' },
      { name: 'Backend', url: 'https://github.com/yoav235/shift-manager-backend' },
    ],
    live: null,
  },
]

export default function Projects() {
  return (
      <section id="projects">
        <p className="section-label">What I've built</p>
        <h2 className="section-title">Projects</h2>
        <div className={styles.grid}>
          {projects.map(({ title, description, tech, githubs, live }) => (
            <article key={title} className={styles.card}>
              <div className={styles.top}>
                <h3 className={styles.title}>{title}</h3>
                <div className={styles.links}>
                  {githubs?.map((repo) => (
                    <a
                      key={repo.name || repo.url}
                      href={repo.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`GitHub - ${repo.name || 'Repository'}`}
                      title={repo.name}
                    >
                      <GithubIcon />
                    </a>
                  ))}
                  {live && (
                    <a href={live} target="_blank" rel="noopener noreferrer" aria-label="Live demo">
                      <ExternalIcon />
                    </a>
                  )}
                </div>
              </div>
              <p className={styles.desc}>{description}</p>
              <ul className={styles.tech}>
                {tech.map((t) => (
                  <li key={t} className={styles.techTag}>{t}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
  )
}

function GithubIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  )
}

function ExternalIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  )
}
