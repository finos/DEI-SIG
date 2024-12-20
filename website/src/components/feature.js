import React from 'react';
import classnames from 'classnames';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from '../pages/styles.module.css';

export default function Feature({title, description, about, project, involved, icon}) {

    var defined = function(property){
        return typeof property !== 'undefined';
    };

    return (
        <div className={classnames('text--center col col--4 padding', styles.feature)}>
            <i className={'fa-solid fa-5x ' + icon} style={{color: '#02b5e2'}}></i>
            <p></p>
            <h3>{title}</h3>
            <p>{description}</p>
            <div className={classnames(styles.featureCTA)}>
                {defined(about) && defined(about.title) && defined(about.link) && about.link !== '' &&
                    <ul>
                        <li><a href={about.link}>{about.title}</a></li>
                    </ul>
                }
                {defined(project) && defined(project.title) && defined(project.link) && project.link !== '' &&
                    <ul>
                        <li><a href={project.link}>{project.title}</a></li>
                    </ul>
                }
                {defined(involved) && defined(involved.title) && defined(involved.link) && involved.link !== '' &&
                    <ul>
                        <li><a href={involved.link}>{involved.title}</a></li>
                    </ul>
                }
            </div>
        </div>
    );
}