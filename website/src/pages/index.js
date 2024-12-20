import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './styles.module.css';
import Feature from '../components/feature';
import { features } from '../components/feature-config';

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description={`${siteConfig.tagline}`}>
      <header className={classnames('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className={classnames('hero--subtitle')}>{siteConfig.tagline}</p>
        </div>
      </header>
      <main>
        {features && features.length && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
        <div className="container">
          <h1>Getting Started</h1>
          <p>Welcome to the Diversity, Equity, and Inclusion (DEI) portal of the Fintech Open Source Foundation (FINOS). At FINOS, we believe that innovation thrives in an environment where diverse perspectives are celebrated, equitable opportunities are provided, and inclusive practices are embedded into the fabric of our community. Our mission is not only to advance open source collaboration in financial services but also to ensure that every voice is heard, valued, and empowered.</p>

          <p>The DEI initiatives at FINOS are designed to break barriers, foster meaningful connections, and create a safe space where individuals from all backgrounds can contribute and excel. Whether you're a seasoned contributor or a newcomer to the open source community, we are committed to supporting your journey and amplifying your impact.</p>

          <p>This platform serves as a hub for our DEI efforts, showcasing our policies, programs, and resources aimed at building a more inclusive ecosystem. Here, you'll find stories of success, opportunities for engagement, and actionable steps to drive change in your own circles.</p>

          <p>Join us as we work together to redefine collaboration, innovation, and equity in the open source financial technology space. Together, we can create a future where diversity is not just embraced but celebrated as a cornerstone of progress.</p>


        </div>
      </main>
    </Layout>
  );
}

export default Home;