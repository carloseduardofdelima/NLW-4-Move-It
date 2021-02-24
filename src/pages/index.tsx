
import React from 'react';
import { CompletedChallenges } from '../Components/CompletedChallenges';
import { Countdown } from '../Components/Countdown';
import { ExperienceBar } from '../Components/ExperienceBar'
import { Profile } from '../Components/Profile';

import Head from 'next/head';

import styles from '../styles/pages/Home.module.css'
import { ChallengeBox } from '../Components/ChallengeBox';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Inicio | Moveit</title>
      </Head>
     
      <ExperienceBar />

      <section>
        <div >
          <Profile />
          <CompletedChallenges />
          <Countdown />
        </div>
        <div>
          <ChallengeBox />
          

        </div>
      </section>
    </div>
  );
}