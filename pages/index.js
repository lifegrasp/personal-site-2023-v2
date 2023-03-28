import { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Socials from "@/components/Socials";
import styles from "../styles/Home.module.css";

export default function Home() {
  const Introduction = () => {
    const SocialsIntro = () => {
      return (
        <div className={styles.introSocials}>
          <Socials />
        </div>
      );
    };

    return (
      <div className={styles.introduction}>
        {/* intro item 1 */}
        <Image
          className={styles.itemOne}
          src="/../public/cloud-w-beaming-smile.png"
          alt="a cloud with a beaming smile"
          width={500}
          height={500}
        />

        {/* intro item 2 */}
        <div className={styles.itemTwo}>
          <h1>Henry Hart</h1>
          <p>
            A web developer with a passion for creating stunning and
            user-friendly websites.
          </p>
          <SocialsIntro />
          <Link href="#">
            <p>See my résumé</p>
          </Link>
        </div>

        {/* intro item 3 */}
        <div className={styles.itemThree}>
          <h2>Bio</h2>
          <p>
            Allo ~ ! I'm Henry Hart, a web developer based in the Philippines.
            My passion for computers started when I was just a kid, and it has
            continued to grow ever since. I'm currently focused on learning
            Reactjs and Nextjs, but I'm always on the lookout for new
            technologies to explore. In the future, I'm planning to expand my
            skillset even further and learn Svelte. I love the challenge and the
            sense of accomplishment that comes with building something from
            scratch, and I'm always looking for ways to improve my craft.
          </p>
        </div>
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
            <div className={styles.repoRow}>
              <Image
                className={styles.repoRowOne}
                src={repoData.owner.avatar_url}
                width={300}
                height={300}
              />
              <p className={styles.repoRowTwo}>{repoData.owner.login}</p>
              <Image
                className={styles.repoRowThree}
                src="/../public/svg/link.svg"
                width={300}
                height={300}
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
            <div className={styles.repoRow}>
              <Image
                className={styles.repoRowOne}
                src="/../public/svg/user.svg"
                width={300}
                height={300}
              />
              <p className={styles.repoRowTwo}>Author</p>
              <Image
                className={styles.repoRowThree}
                src="/../public/svg/link.svg"
                width={300}
                height={300}
              />
            </div>
            <h3 className={styles.repoTitle}>Project Title</h3>
            <p className={styles.repoDesc}>
              Description's placeholder for a future project.
            </p>
          </div>
        </Link>
      );
    };

    return (
      <div className={styles.repository}>
        <h2>Projects</h2>
        <Repo user="lifegrasp" repo="personal-site-2023-v2" />
        <Placeholder />
        <Placeholder />
        <Placeholder />
      </div>
    );
  };

  const Quote = () => {
    return (
      <blockquote className={styles.quote}>
        <p>
          "A heart anxious to learn is natural. Chasing the unknown, craving
          comprehension - these are a person's indelible instincts. Nothing in
          this world can destroy the will to search for the unknown, an
          instinctive thirst for knowledge. As a person perseveres in this
          search, they will be able to change like a cocoon turning into a
          butterfly."
        </p>
        <p>
          - Li Qiye, <cite>Emperor's Domination</cite>
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
          <Introduction />
          <Repositories />
          <Quote />
        </div>
      </main>
    </>
  );
}
