import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Archive.module.css";
import Introduction from "@/components/Introduction";
import BeamingCloud from "@/components/BeamingCloud";

export default function Archive() {
  const Intro = () => {
    const introItemOne = (
      <div className={styles.itemOne}>
        <BeamingCloud />
      </div>
    );

    const introItemTwo = (
      <div className={styles.itemTwo}>
        <h1>Previous Iterations</h1>
        <p>
          A curated archive of my personal site's versions, demonstrating the
          growth and development of my digital presence.
        </p>
      </div>
    );

    const introItemThree = (
      <div className={styles.itemThree}>
        <h2>Disclaimer</h2>
        <p>
          While I cannot guarantee the full functionality of all links and
          images within this archive, I cordially invite you to take a leisurely
          stroll down memory lane, and explore the different stages of my
          personal site's development throughout the years.
        </p>
      </div>
    );

    return (
      <div className={styles.introduction}>
        <Introduction
          itemOne={introItemOne}
          itemTwo={introItemTwo}
          itemThree={introItemThree}
        />
      </div>
    );
  };

  const Iterations = () => {
    const Archived = (props) => {
      const { date, imgSrc, alt, repoUrl, archUrl } = props;

      return (
        <div className={styles.archived}>
          <div>
            <Link href={archUrl} target="_blank">
              <Image src={imgSrc} alt={alt} width={500} height={500} />
            </Link>
          </div>
          <span>
            <h3>{date}</h3>
            <Link href={repoUrl} target="_blank">
              <Image
                src="/../public/svg/github.svg"
                alt="GitHub logo"
                width={500}
                height={500}
              />
            </Link>
          </span>
        </div>
      );
    };

    return (
      <div className={styles.iterations}>
        <Archived
          date="2023 V2"
          imgSrc="/../public/archive/2023-V2.png"
          alt="2023 V1 iteration of the site"
          repoUrl="https://github.com/lifegrasp/personal-site-2023-v2"
          archUrl="/"
        />
        <Archived
          date="2023 V1"
          imgSrc="/../public/archive/2023-V1.png"
          alt="2023 V1 iteration of the site"
          repoUrl="https://github.com/lifegrasp/personal-site-2023"
          archUrl="/archive/2023-V1.html"
        />
      </div>
    );
  };

  return (
    <>
      <Head>
        <title>Henry Hart | Archive</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className={styles.archive}>
          <Intro />
          <Iterations />
        </div>
      </main>
    </>
  );
}