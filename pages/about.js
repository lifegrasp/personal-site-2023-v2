import Head from "next/head";
import Image from "next/image";
import styles from "../styles/About.module.css";
import BeamingCloud from "@/components/BeamingCloud";
import Introduction from "@/components/Introduction";

export default function About() {
  const Intro = () => {
    const introItemOne = (
      <div className={styles.itemOne}>
        <BeamingCloud />
      </div>
    );

    const introItemTwo = (
      <div className={styles.itemTwo}>
        <h1>Tech Stack</h1>
        <div>
          <span>
            <p>React.js</p>
            <Image
              src="/../public/logo/react.png"
              alt="React logo"
              width={500}
              height={500}
            />
          </span>
          <span>
            <p>Next.js</p>
            <Image
              src="/../public/logo/next.png"
              alt="Next logo"
              width={500}
              height={500}
            />
          </span>
          <span>
            <p>Tailwind</p>
            <Image
              src="/../public/logo/tailwindcss.png"
              alt="Tailwind CSS logo"
              width={500}
              height={500}
            />
          </span>
          <span>
            <p>SASS</p>
            <Image
              src="/../public/logo/sass.png"
              alt="SASS logo"
              width={500}
              height={500}
            />
          </span>
        </div>
      </div>
    );

    const introItemThree = (
      <div className={styles.itemThree}>
        <h2>Proficiencies</h2>
        <p>
          Familiar with a variety of programming languages, web technologies,
          and software tools. Committed to using best practices to create
          functional and user-friendly applications. Continuously learning and
          exploring new technologies to further develop my skills and bring
          valuable solutions to the table.
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

  const Experience = () => {
    return (
      <div className={styles.experience}>
        {/* item one */}
        <div className={styles.itemOne}>
          <h2>Experience</h2>
          <p>
            Combined experience as a community manager, ROTC officer, and IT
            intern has honed my skills in community building, leadership, and
            technology operations. Proficient in fostering relationships,
            executing projects, and utilizing technology to achieve successful
            outcomes.
          </p>
        </div>

        {/* item two */}
        <div className={styles.itemTwo}>
          <div className={styles.exp}>
            <div className={styles.timeline}>
              <h3>Philippine Health Insurance Corporation</h3>
              <h4>SEP 2022 - JAN 2023</h4>
            </div>
            <div className={styles.position}>
              <h4>IT Intern</h4>
              <ul>
                <li>Assisting with technical support.</li>
                <li>Assisting with data management.</li>
                <li>Maintaining and updating hardware and software.</li>
              </ul>
            </div>
          </div>
          <div className={styles.exp}>
            <div className={styles.timeline}>
              <h3>St. Vincent's College Incorporated</h3>
              <h4>JUN 2019 - MAR 2020</h4>
            </div>
            <div className={styles.position}>
              <h4>ROTC Officer</h4>
              <ul>
                <li>
                  Allocates resources to ensure accomplishment of all company
                  level missions.
                </li>
                <li>
                  Responsible for all matters concerning training, operations,
                  and plans at company level.
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.exp}>
            <div className={styles.timeline}>
              <h3>Black Desert Online</h3>
              <h4>OCT 2018 - JAN 2022</h4>
            </div>
            <div className={styles.position}>
              <h4>Community Manager</h4>
              <ul>
                <li>
                  Build relationships with other communities and individual.
                </li>
                <li>Monitor and report on feedback.</li>
                <li>Organize and participate in events.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const Education = () => {
    return (
      <div className={styles.education}>
        <h2>Education</h2>
        <p>
          I completed my{" "}
          <span>Bachelor of Science in Information Technology</span> degree at
          the esteemed <span>St. Vincent's College Incorporated</span>. My
          academic journey spanned from 2019 to 2023, during which I dedicated
          myself to acquiring a comprehensive understanding of the IT landscape.
          I engaged in rigorous coursework that covered a wide range of topics,
          including programming languages, software development, data
          management, and network administration. As part of my degree program,
          I also participated in various projects and internships, which allowed
          me to apply the theoretical knowledge I gained in the classroom to
          real-world scenarios. This holistic educational experience has
          equipped me with the skills and expertise necessary to excel in the
          field of Information Technology, and I am eager to leverage this
          foundation in my professional career.
        </p>
      </div>
    );
  };

  return (
    <>
      <Head>
        <title>Henry Hart | About</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className={styles.about}>
          <Intro />
          <Experience />
          <Education />
        </div>
      </main>
    </>
  );
}
