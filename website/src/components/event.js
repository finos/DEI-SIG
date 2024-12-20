import React from 'react';
import classnames from 'classnames';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from '../pages/styles.module.css';

export default function Event({title, location, time, link}) {

    var defined = function(property){
        return typeof property !== 'undefined';
    };

    return (
        <div className={classnames('text--center col col--4 padding', styles.feature)}>
            <i className={'fa-solid fa-5x fa-facebook'} style={{color: '#02b5e2'}}></i>
            <p>{title}</p>
            <p>{location}</p>
            <p>{time}</p>
            <p>{link}</p>
        </div>
    );
}