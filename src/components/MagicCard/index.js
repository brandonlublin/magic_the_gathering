import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './style.css'

function MagicCard(props) {
    const { name, artist, setname, type, deck } = props;

    return (
        <div className="row">
            <div className="col s12 m7">
            <div className="card">
                <div className="card-image">
                    <img src="images/sample-1.jpg" />
                    <span className="card-title">Card Title</span>
                </div>
                <div className="card-content">
                <p>I am a very simple card. I am good at containing small bits of information.
                I am convenient because I require little markup to use effectively.</p>
                </div>
                <div className="card-action">
                    <li>{name}</li>
                    <li>{artist}</li>
                    <li>{setname}</li>
                    <li>{type}</li>
                    <li>{deck}</li>
                </div>
            </div>
            </div>
        </div>
    )
};

export default MagicCard;