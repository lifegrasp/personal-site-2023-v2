import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Socials.module.css";

export default function Socials() {
  const Social = (props) => {
    const { link, imgSrc, alt, tooltip } = props;

    return (
      <Link href={link} target="_blank">
        <span>{tooltip}</span>
        <Image src={imgSrc} alt={alt} width={100} height={100} />
      </Link>
    );
  };

  return (
    <div className={styles.socials}>
      <Social
        link="https://github.com/lifegrasp"
        imgSrc="/svg/github.svg"
        alt="GitHub icon"
        tooltip="@lifegrasp"
      />
      <Social
        link="https://www.linkedin.com/in/henry-hart-alegrado-15953524b/"
        imgSrc="/svg/linkedin.svg"
        alt="LinkedIn icon"
        tooltip="Henry Hart Alegrado"
      />
      <Social
        link="mailto:henryhartalegrado@gmail.com"
        imgSrc="/svg/mail.svg"
        alt="Mail icon"
        tooltip="henryhartalegrado@gmail.com"
      />
    </div>
  );
}
