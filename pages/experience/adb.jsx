import Head from 'next/head';

import ImageBlock from '../../components/ImageBlock';
import Navbar from '../../components/Navbar';

function AdBridg() {
  return (
    <>
      <Head>
        <title>Experience {'>'} AdBridg</title>
      </Head>

      <Navbar />

      <section className="hero job-details">
        <div className="container">
          <div className="text-wrapper w-full">
            <h1 className="title">
              <span>Platform Engineer @ AdBridg</span>
              <span>(January 2021 - Present)</span>
            </h1>
            <p className="description">Reponsibilities</p>
            <ul>
              <li>Build and maintain inhouse backend applications.</li>
              <li>
                Build, model, design and implement inhouse integration testing framework for
                Continuous Integration.
              </li>
              <li>
                Building, designing and implementing Continuous Deployment task manager and queuing
                system.
              </li>
              <li>
                Maintain and build new features and functionalities for backend APIs and other
                dependent applications
              </li>
            </ul>
            <p className="description">Past responsibilities carried over:</p>
            <ul>
              <li>Maintain and new features for existing web applications (front and back end).</li>
            </ul>
          </div>
          <ImageBlock srcList={['js', 'node', 'express', 'mysql', 'aws', 'dfp', 'pbd']} />
        </div>
      </section>
      <hr className="break-section" />
      <section className="hero job-details">
        <div className="container">
          <div className="text-wrapper w-full">
            <h1 className="title">
              <span>Full-stack Developer @ AdBridg</span>
              <span>(February 2020 - January 2021)</span>
            </h1>
            <p className="description">Reponsibilities</p>
            <ul>
              <li>
                Maintain, debug and build new features for all web applications (client and public
                facing).
              </li>
              <li>
                Maintain, debug and build new features for backend APIs and applications related to
                all font-end apps.
              </li>
              <li>Occasional debug client distributed applications prior to deployment.</li>
            </ul>
          </div>
          <ImageBlock srcList={['js', 'node', 'express', 'mysql', 'aws']} />
        </div>
      </section>
      <hr className="break-section" />
      <section className="hero job-details">
        <div className="container">
          <div className="text-wrapper w-full">
            <h1 className="title">
              <span>Junior Developer @ AdBridg</span>
              <span>(February 2019 - February 2020)</span>
            </h1>
            <p className="description">
              Managing and creating new features for the inhouse Ad Management web application.
              Rebuilding inhouse webpage from ReactJS to inhouse/custom framework with VanillaJS
            </p>
            <p className="description">Reponsibilities</p>
            <ul>
              <li>
                Maintain, debug and build new features for all web applications (client and public
                facing).
              </li>
              <li>
                Model, design and build new client facing application with new inhouse framework
                built from scratch
              </li>
              <li>
                Add new queries to the API related for any new features added to the front-end
              </li>
            </ul>
          </div>
          <ImageBlock srcList={['js', 'react', 'node', 'mysql']} />
        </div>
      </section>
      <hr className="break-section double" />
      <section className="hero job-details">
        <div className="container">
          <div className="text-wrapper w-full">
            <h2>With the help of:</h2>
            <ImageBlock srcList={['shell', 'linux', 'vscode', 'html', 'css']} />
          </div>
        </div>
      </section>
    </>
  );
}

export default AdBridg;
