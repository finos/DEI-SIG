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
            <header>
                <h1>Global and Local Calendar</h1>
                <p>Stay connected with the pulse of Diversity, Equity, and Inclusion efforts within the FINOS community. Our calendar highlights a range of events, from global conferences and webinars to local meetups and workshops. These events are designed to foster collaboration, share best practices, and celebrate the diverse voices that make our community thrive. Whether you're looking to network, learn, or lead, there's an opportunity waiting for you. Explore the calendar and join us in driving meaningful change across the open source and financial technology landscapes.</p>
            </header>
            <main>
                {events.map((props, idx) => (
                    <Event key={idx} {...props} />
                ))}
            </main>
        </Layout>
    );
}

export default EventsHome;