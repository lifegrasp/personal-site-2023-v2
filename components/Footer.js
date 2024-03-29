import Socials from "@/components/Socials";
import styles from "../styles/Footer.module.css";

export default function Footer() {
  const SocialsFooter = () => {
    return (
      <div className={styles.footerSocials}>
        <Socials />
      </div>
    );
  };
  const Description = () => {
    return <p>Created with suffering. 💖</p>;
  };

  return (
    <footer className={styles.footer}>
      <SocialsFooter />
      <Description />
    </footer>
  );
}
