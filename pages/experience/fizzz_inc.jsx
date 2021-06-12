import Head from 'next/head';

import ImageBlock from '../../components/ImageBlock';
import Navbar from '../../components/Navbar';

function FizzzInc() {
  return (
    <>
      <Head>
        <title>Experience {'>'} Fizzz Design Inc.</title>
      </Head>

      <Navbar />

      <section className="hero">
        <div className="container">
          <div className="text-wrapper w-full">
            <h1 className="title">
              <span>Junior Front-end Developer @ Fizzz Design Corp.</span>
              <span>(November 2017 - January 2018)</span>
            </h1>
            <p className="description">
              Built web applications for clients from scratch or as per Graphics Designers
              specifications. From Single-page application to multiple-page applications with
              whichever framework best suites the clients needs.
            </p>
            <p className="description">Reponsibilities</p>
            <ul>
              <li>Developing both front end and back end web applications.</li>
              <li>Integrating complex data structures to generate dynamic web pages.</li>
              <li>Implementing more accessible webpages and/or web applications.</li>
            </ul>
          </div>
          {ImageBlock({
            srcList: [
              'angular',
              'react',
              'firebase',
              'jquery',
              'js',
              'mongodb',
              'typescript',
              'bootstrap'
            ]
          })}
        </div>
      </section>
    </>
  );
}

export default FizzzInc;
