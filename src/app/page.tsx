import styles from "@/styles/HomePage.module.scss";
import Image from "next/image";
import photo from "/public/images/photo.jpg";

export default function Home() {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.personalInfo}>
        <div className={styles.personalInfoText}>
          <b>I am Egor,</b> a NLP Engineer studying at Innopolis University.
        </div>
        <div className={styles.personalInfoImage}>
          <Image src={photo} width={290} height={290} alt="" />
        </div>
      </div>
    </div>
  );
}
