import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './styles.module.css';

function EventsHome() {
    const context = useDocusaurusContext();
    const {siteConfig = {}} = context;
    return (
        <Layout
        title={`${siteConfig.title}`}
        description={`${siteConfig.tagline}`}>
            <header className={classnames('hero hero--primary', styles.heroBanner)}></header>
            <main>

            </main>
        </Layout>
    );
}

export default EventsHome;