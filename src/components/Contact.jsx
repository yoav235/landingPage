import styles from './Contact.module.css'

const links = [
  {
    label: 'Email',
    value: 'yoav.schneider2@mail.huji.ac.il',
    href: 'mailto:yoav.schneider2@mail.huji.ac.il',
  },
  {
    label: 'GitHub',
    value: 'github.com/yoav235',
    href: 'https://github.com/yoav235',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/yoav-schneider-cs',
    href: 'https://www.linkedin.com/in/yoav-schneider-cs/',
  },
]

export default function Contact() {
  return (
    <section id="contact">
      <p className="section-label">Say hello</p>
      <h2 className="section-title">Contact</h2>
      <p className={styles.blurb}>
        I'm always open to interesting projects and opportunities. Feel free to
        reach out through any of the channels below.
      </p>
      <ul className={styles.list}>
        {links.map(({ label, value, href }) => (
          <li key={label} className={styles.item}>
            <span className={styles.label}>{label}</span>
            <a href={href} target={href.startsWith('mailto') ? undefined : '_blank'} rel="noopener noreferrer">
              {value}
            </a>
          </li>
        ))}
      </ul>
      <footer className={styles.footer}>
        <p>Built with React + Vite &mdash; Yoav Schneider {new Date().getFullYear()}</p>
      </footer>
    </section>
  )
}
