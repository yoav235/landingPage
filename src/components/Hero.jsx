import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section id="hero" className={styles.section}>
      <p className={styles.greeting}>Hi, I'm</p>
      <h1 className={styles.name}>Yoav Schneider</h1>
      <h2 className={styles.title}>
        Fullstack Developer
      </h2>
      <p className={styles.bio}>
        Full stack developer with hands-on experience building web applications
        and leading projects end-to-end. Skilled in AI-augmented development
        with tools like Claude Code and Cursor — leveraging specs-driven
        workflows to deliver faster, higher-quality results. All about goals,
        challenges, and deadlines.
      </p>
      <div className={styles.contact}>
        <a href="mailto:yoav.schneider2@mail.huji.ac.il" className={styles.contactLink}>
          ✉️ yoav.schneider2@mail.huji.ac.il
        </a>
        <a href="https://www.linkedin.com/in/yoav-schneider-cs/" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
          💼 LinkedIn
        </a>
        <a href="https://github.com/yoav235" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
          🔗 GitHub
        </a>
      </div>
      <div className={styles.cta}>
        <a href="#projects" className={styles.btnPrimary}>View my work</a>
      </div>
    </section>
  )
}
