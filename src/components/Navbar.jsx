import styles from './Navbar.module.css'

const links = [
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.left}>
          <a href="#hero" className={styles.logo}>
            YS<span className={styles.dot}>.</span>
          </a>
          <a
            href="https://www.linkedin.com/in/yoav-schneider-cs"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.socialBtn} ${styles.linkedin}`}
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/yoav235"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.socialBtn} ${styles.github}`}
          >
            GitHub
          </a>
        </div>
        <ul className={styles.links}>
          {links.map(({ label, href }) => (
            <li key={href}>
              <a href={href}>{label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
