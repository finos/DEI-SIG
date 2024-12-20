import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './styles.module.css';
import Event from '../components/event';
import { events } from '../components/event-config';

function EventsHome() {
    const context = useDocusaurusContext();
    const { siteConfig = {} } = context;
    return (
        <Layout
            title={`${siteConfig.title}`}
            description={`${siteConfig.tagline}`}>
            <header></header>
            <main>
                {events && events.length && (
                    <section className={styles.features}>
                        <div className="container">
                            <div className="row">
                                {events.map((props, idx) => (
                                    <Event key={idx} {...props} />
                                ))}
                            </div>
                        </div>
                    </section>
                )}
            </main>
        </Layout>
    );
}

export default EventsHome;