import React from 'react';
import classnames from 'classnames';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from '../pages/styles.module.css';

export default function Event({title, location, time, link}) {

    var defined = function(property){
        return typeof property !== 'undefined';
    };
    var dt = new Date(time).toLocaleString();
    return (
        <div className={classnames('text--center col col--4 padding', styles.feature)}>
            <div><i class="fa-solid fa-calendar-day fa-lg"></i>{title}</div>
            <div><i class="fa-solid fa-location-dot fa-lg"></i> {location}</div>
            <div><i class="fa-solid fa-user-clock fa-lg"></i> {dt}</div>
            <div><i class="fa-solid fa-user-plus fa-lg"></i> <a href={link}>Sign Up!</a></div>
        </div>
    );
}