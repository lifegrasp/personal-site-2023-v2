import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Socials.module.css"

export default function Socials() {
  return (
    <div className={styles.socials}>
      <Link href="#">
        <Image
          src="/../public/svg/github.svg"
          alt="GitHub icon"
          width={100}
          height={100}
        />
      </Link>
      <Link href="#">
        <Image
          src="/../public/svg/linkedin.svg"
          alt="LinkedIn icon"
          width={100}
          height={100}
        />
      </Link>
      <Link href="#">
        <Image
          src="/../public/svg/mail.svg"
          alt="Mail icon"
          width={100}
          height={100}
        />
      </Link>
    </div>
  );
}
