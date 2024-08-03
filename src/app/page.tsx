"use client";

import styles from "@/styles/HomePage.module.scss";
import Image from "next/image";
import Link from "next/link";
import photo from "/public/images/photo1.jpg";
import github from "/public/svg/github.svg";
import telegram from "/public/svg/telegram.svg";
import linkedin from "/public/svg/linkedin.svg";
import twitter from "/public/svg/twitter.svg";
import "./globals.scss";

export default function Home() {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.mainContainer}>
        <div className={styles.personalInfo}>
          <div className={styles.personalInfoText}>
            <div className={styles.personalInfoTextMsg}>Hi! 👋</div>
            <div className={styles.personalInfoTextBio}>
              <b style={{ color: "black" }}>I am Egor,</b> an NLP Engineer
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
      <div className={styles.timeLineContainer}>
        <ol className="relative border-s border-gray-200 dark:border-gray-700">
          <li className="mb-10 ms-4">
            
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <Image src={twitter} width={32} height={32} alt="x" />
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              April 2024
            </time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Advanced Engineering School Trainee
            </h3>
            
            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
              Get access to over 20+ pages including a dashboard layout, charts,
              kanban board, calendar, and pre-order E-commerce & Marketing
              pages.
            </p>
          </li>
          <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              August 2024
            </time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Innopolis University BSc enrollment
            </h3>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              All of the pages and components are first designed in Figma and we
              keep a parity between the two versions even as we update the
              project.
            </p>
          </li>
        </ol>
      </div>
    </div>
  );
}
