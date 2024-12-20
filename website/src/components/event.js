import React from 'react';
import classnames from 'classnames';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from '../pages/styles.module.css';
import Link from '@docusaurus/Link';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Event({ title, location, time, link }) {

    var defined = function (property) {
        return typeof property !== 'undefined';
    };

    return (
        <Card>
            <Card.Body>
                <Card.Title>
                    <i class="fa-solid fa-calendar-day fa-lg"></i> {title}
                </Card.Title>
                <Card.Text>
                    <div><i class="fa-solid fa-location-dot fa-lg"></i> {location}</div>
                    <div><i class="fa-solid fa-user-clock fa-lg"></i> {new Date(time).toLocaleString()}</div>
                </Card.Text>
                {new Date(time)>Date.now() ? 
                <Button variant="primary" href={link}><i className="fa-solid fa-user-plus fa-lg"></i> Sign Up!</Button> :
                <Button variant="primary" href={link}><i className="fa-solid fa-images fa-lg"></i> Check out!</Button>
                }
                
            </Card.Body>
        </Card>
    );
}