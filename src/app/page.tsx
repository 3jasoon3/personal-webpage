import styles from "@/styles/HomePage.module.scss";
import Image from "next/image";
import Link from "next/link";
import photo from "/public/images/photo.jpg";
import github from "/public/svg/github.svg";
import telegram from "/public/svg/telegram.svg";
import linkedin from "/public/svg/linkedin.svg";
import twitter from "/public/svg/twitter.svg";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Egor Chernobrovkin"
};

export default function Home() {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.mainContainer}>
        <div className={styles.personalInfo}>
          <div className={styles.personalInfoText}>
            <div className={styles.personalInfoTextMsg}>Hi! 👋</div>
            <div className={styles.personalInfoTextBio}>
              <b style={{ color: "black" }}>I am Egor,</b> a NLP Engineer
              studying at Innopolis University.
            </div>
            <div className={styles.contactsContainer}>
              <div className={styles.contactsText}>Contacts:</div>
              <div className={styles.contactsIcons}>
                <Link href="https://github.com/3jasoon3/">
                  <Image src={github} width={30} height={30} alt="gh" />
                </Link>
                <Link href="https://t.me/lolyhop">
                  <Image src={telegram} width={33} height={33} alt="tg" />
                </Link>
                <Link href="/">
                  <Image src={linkedin} width={32} height={32} alt="ln" />
                </Link>
                <Link href="https://x.com/chrnegor">
                  <Image src={twitter} width={32} height={32} alt="x" />
                </Link>
              </div>
            </div>
          </div>
          <Image
            src={photo}
            width={240}
            height={240}
            alt=""
            className={styles.personalInfoImage}
          />
        </div>
        <div className={styles.separatorContainer}>
          <div className={styles.separator}></div>
        </div>
      </div>
    </div>
  );
}
