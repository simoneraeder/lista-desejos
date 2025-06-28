import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <p className={styles.dir}>
            {" "}
            2025, Meus Desejos - Todos os direitos reservados
          </p>
          <div className={styles.links}>
            <a
              className={styles.githubLink}
              href="https://github.com/simoneraeder"
              target="_blank"
              rel="noopener noreferrer"
            >
              Simone Raeder
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
