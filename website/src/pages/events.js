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
    const {siteConfig = {}} = context;
    return (
        <Layout
        title={`${siteConfig.title}`}
        description={`${siteConfig.tagline}`}>
            <header></header>
            <main>

            </main>
        </Layout>
    );
}

export default EventsHome;