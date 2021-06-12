import Head from 'next/head';

import Navbar from '../components/Navbar';

function About() {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>

      <Navbar />

      <section className="hero">
        <div className="container">
          <div className="text-wrapper w-full">
            <h1 className="title">About</h1>
            <p className="description">
              An interest in Computer Programming led me to do a degree in Computer Science. It took
              much longer than most, with ups and downs during these seven years. But with
              persistence and perseverance through repeated failures have finally graduated. Let
              this be an example how failure is not an obstacle but an opportunity to get stronger.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
