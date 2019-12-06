import React from "react"
import "./style.css"
import { Card, CardTitle } from "react-materialize";

function MagicCard(props) {
    const { imageUrl, name, artist, set, type, deck } = props;

    return (
        <Card
            header={<CardTitle image={imageUrl}></CardTitle>}
        >
            <div className="card-action">
                <li>{name}</li>
                <li>{artist}</li>
                <li>{type}</li>
                <li>{set}</li>
                <li>{deck}</li>
            </div>
        </Card>
    )
};

export default MagicCard;