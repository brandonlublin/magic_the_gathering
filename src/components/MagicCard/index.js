import React from 'react'
import './style.css'
import { Card, CardTitle } from 'react-materialize';

function MagicCard(props) {
    const { name, artist, setname, type, deck } = props;

    return (
        <Card
            header={<CardTitle image="https://materializecss.com/images/sample-1.jpg"></CardTitle>}
        >
            <div className="card-action">
                <li>{name}</li>
                <li>{artist}</li>
                <li>{setname}</li>
                <li>{type}</li>
                <li>{deck}</li>
            </div>
        </Card>
    )
};

export default MagicCard;