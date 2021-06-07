import Link from 'next/link';
import Navbar from '../components/Navbar';
import Head from 'next/head';

const Home = () => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <Navbar />

      <section className="hero">
        <div className="container">
          <div className="text-wrapper">
            <h1 className="title">Halo, saya Lutfhi Ramadhan</h1>
            <p className="description">
              Welcome to my portfolio. I am a <span className="hl">software engineer</span> with{' '}
              <span className="hl">3+ years</span> of experience, but I'm also a gamer with a
              lifetime of experience.
            </p>

            <Link href="/contact">
              <a className="cta">Contact Me</a>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
