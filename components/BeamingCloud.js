import Image from "next/image";
import styles from "../styles/BeamingCloud.module.css";

export default function BeamingCloud() {
  return (
    <div className={styles.beamingCloud}>
      <Image src="/cloud-w-beaming-smile.png"
        alt="a cloud with a beaming smile"
        width={500}
        height={500}
      />
    </div>
  );
}
