import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer + " " + styles.bold}>
      Copyright &copy; 2025 Joshua Boothby
    </footer>
  );
}
