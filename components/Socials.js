import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Socials.module.css";

export default function Socials() {
  const Social = (props) => {
    const { link, imgSrc, alt } = props;

    return (
      <Link href={link} target="_blank">
        <Image src={imgSrc} alt={alt} width={100} height={100} />
      </Link>
    );
  };

  return (
    <div className={styles.socials}>
      <Social
        link="https://github.com/lifegrasp"
        imgSrc="/../public/svg/github.svg"
        alt="GitHub icon"
      />
      <Social
        link="https://www.linkedin.com/in/henry-hart-alegrado-15953524b/"
        imgSrc="/../public/svg/linkedin.svg"
        alt="LinkedIn icon"
      />
      <Social
        link="mailto:henryhartalegrado@gmail.com"
        imgSrc="/../public/svg/mail.svg"
        alt="Mail icon"
      />
    </div>
  );
}
