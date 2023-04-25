import Image from "next/image";
import styles from "../styles/Introduction.module.css";

export default function Introduction(props) {
  const { itemOne, itemTwo, itemThree } = props;

  return (
    <div className={styles.introduction}>
      {/* item one */}
      <div className={styles.itemOne}>{itemOne}</div>

      {/* item two */}
      <div className={styles.itemTwo}>{itemTwo}</div>

      {/* item three */}
      <div className={styles.itemThree}>{itemThree}</div>
    </div>
  );
}
