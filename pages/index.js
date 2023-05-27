import { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import BeamingCloud from "@/components/BeamingCloud";
import Introduction from "@/components/Introduction";
import Socials from "@/components/Socials";

export default function Home() {
  const Intro = () => {
    const introItemOne = (
      <div className={styles.itemOne}>
        <BeamingCloud />
      </div>
    );

    const introItemTwo = (
      <div className={styles.itemTwo}>
        <h1>Henry Hart</h1>
        <p>
          A web developer with a passion for creating stunning and user-friendly
          websites.
        </p>
        <div className={styles.socials}>
          <Socials />
        </div>
        <a href="resume.pdf" target="_blank">
          <p>See my résumé</p>
        </a>
      </div>
    );

    const introItemThree = (
      <div className={styles.itemThree}>
        <h2>Bio</h2>
        <p>
          Allo ~ ! I&apos;m Henry Hart, a web developer based in the Philippines. My
          passion for computers started when I was just a kid, and it has
          continued to grow ever since. I&apos;m currently focused on learning
          Reactjs and Nextjs, but I&apos;m always on the lookout for new technologies
          to explore. In the future, I&apos;m planning to expand my skillset even
          further. I love the challenge and the sense of accomplishment that
          comes with building something from scratch, and I&apos;m always looking for
          ways to improve my craft.
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

  const Repositories = () => {
    const Repo = ({ user, repo }) => {
      const [repoData, setRepoData] = useState(null);
      const [loading, setLoading] = useState(false);

      useEffect(() => {
        async function fetchData() {
          setLoading(true);
          const response = await fetch(
            `https://api.github.com/repos/${user}/${repo}`
          );
          const data = await response.json();
          setRepoData(data);
          setLoading(false);
        }
        fetchData();
      }, [user, repo]);

      if (loading) {
        return <p>Loading...</p>;
      }

      if (!repoData) {
        return null;
      }

      return (
        <Link href={repoData.html_url} target="_blank">
          <div className={styles.repo}>
            <div className={styles.repoGrid}>
              <Image
                className={styles.repoGridOne}
                src={repoData.owner.avatar_url}
                width={300}
                height={300}
                alt="avatar"
              />
              <p className={styles.repoGridTwo}>{repoData.owner.login}</p>
              <Image
                className={styles.repoGridThree}
                src="/svg/link.svg"
                width={300}
                height={300}
                alt="link"
              />
            </div>
            <h3 className={styles.repoTitle}>{repoData.name}</h3>
            <p className={styles.repoDesc}>{repoData.description}</p>
            {/* TODO: have the main language of the repo displayed and its color as well  */}
          </div>
        </Link>
      );
    };

    const Placeholder = () => {
      return (
        <Link href="#">
          <div className={styles.repo}>
            <div className={styles.repoGrid}>
              <Image
                className={styles.repoGridOne}
                src="/svg/user.svg"
                width={300}
                height={300}
                alt="placeholder avtar"
              />
              <p className={styles.repoGridTwo}>Author</p>
              <Image
                className={styles.repoGridThree}
                src="/svg/link.svg"
                width={300}
                height={300}
                alt="link"
              />
            </div>
            <h3 className={styles.repoTitle}>Project Title</h3>
            <p className={styles.repoDesc}>Description for the project here.</p>
          </div>
        </Link>
      );
    };

    return (
      <div className={styles.repositories}>
        <h2>Projects</h2>
        <div className={styles.displayedRepo}>
          <Repo user="lifegrasp" repo="personal-site-2023-v2" />
          <Repo user="lifegrasp" repo="svci-rndas" />
          <Placeholder />
          <Placeholder />
        </div>
      </div>
    );
  };

  const Quote = () => {
    return (
      <blockquote className={styles.quote}>
        <p>
          &quot;A heart anxious to learn is natural. Chasing the unknown, craving
          comprehension - these are a person&apos;s indelible instincts. Nothing in
          this world can destroy the will to search for the unknown, an
          instinctive thirst for knowledge. As a person perseveres in this
          search, they will be able to change like a cocoon turning into a
          butterfly.&quot;
        </p>
        <p>
          - Li Qiye, <cite>Emperor&apos;s Domination</cite>
        </p>
      </blockquote>
    );
  };

  return (
    <>
      <Head>
        <title>Henry Hart</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className={styles.home}>
          <Intro />
          <Repositories />
          <Quote />
        </div>
      </main>
    </>
  );
}
