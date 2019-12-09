import React from 'react'
import './style.css'
import { Card } from 'react-materialize';
import ReactImageFallback from 'react-image-fallback';

function MagicCard(props) {
    //destructuring props
    const { imageUrl, name, artist, set, type, deck } = props;

    return (
        <Card>
            <h4 className='cardName'>{name}</h4>
            <ReactImageFallback
                className='image'
                src={imageUrl}
                //stock image if no image returned from api
                fallbackImage='https://upload.wikimedia.org/wikipedia/en/thumb/a/aa/Magic_the_gathering-card_back.jpg/220px-Magic_the_gathering-card_back.jpg'
                initialImage='https://upload.wikimedia.org/wikipedia/en/thumb/a/aa/Magic_the_gathering-card_back.jpg/220px-Magic_the_gathering-card_back.jpg'
                alt='Magical Creature'
            />
            <div className='card-action'>
                <li>{artist}</li>
                <li>{type}</li>
                <li>{set}</li>
                <li>{deck}</li>
            </div>
        </Card>
    )
};

export default MagicCard;