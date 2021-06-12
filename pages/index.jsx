import Head from 'next/head';

import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

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
            <h1 className="title">Hello, I&apos;m Khadem Avinoor Alam</h1>
            <p className="description">
              Welcome to my portfolio. I am a <span className="hl">software engineer</span> with{' '}
              <span className="hl">3+ years</span> of experience, but I also like playing games,
              drink lots of tea and listen to music.
            </p>
          </div>

          <Footer />
        </div>
      </section>
    </>
  );
};

export default Home;
