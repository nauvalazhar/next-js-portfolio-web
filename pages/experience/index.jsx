import Head from 'next/head';
import Link from 'next/link';

import Navbar from '../../components/Navbar';

function Portfolio() {
  return (
    <>
      <Head>
        <title>Experiences</title>
      </Head>

      <Navbar />

      <section className="hero">
        <div className="container">
          <div className="text-wrapper w-full">
            <h1 className="title main">Experiences</h1>
            <h2 className="sub-title">Work Experiences</h2>
            <p className="description">My professional experiences</p>
            <div className="portfolio-wrapper">
              <div className="portfolio-item">
                <Link href="/experience/adb">
                  <div>
                    <div className="portfolio-img-box">
                      <img src="/adb.png" className="portfolio-image" alt="AdBridg Logo" />
                    </div>
                    <h4 className="portfolio-name">AdBridg</h4>
                    <div className="portfolio-category">
                      Junior Developer {'>'} Full-stack Developer {'>'} Platform Engineer
                    </div>
                  </div>
                </Link>
              </div>

              <div className="portfolio-item">
                <Link href="/experience/fizzz_inc">
                  <div>
                    <div className="portfolio-img-box">
                      <img
                        src="/fizzz_design.png"
                        className="portfolio-image"
                        alt="Fizzz Design Corp. logo"
                      />
                    </div>
                    <h4 className="portfolio-name">Fizzz Design Corp.</h4>
                    <div className="portfolio-category">Junior Web Developer</div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Portfolio;
