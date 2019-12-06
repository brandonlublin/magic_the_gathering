import React, { Component } from 'react';
import axios from "axios";
import './style.css';
import MagicCard from '../MagicCard';

class CardWrapper extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            cards: [],
            waiting: true,
            isGetting: false
        }
    };
    //call axios url and update state for cards returned in response
    queryAxios(url) {
        axios
        .get(url)
        .then(response => {
            this.setState({
                cards: response.data.cards,
                isLoading: false
            })
        //if error in axios query, catch and send error to state
        }).catch(err => {
            this.setState({
                err: err.mess
            });
        });
    };

    componentDidMount() {
        console.log("the component mounted");
        fetch(`https://api.magicthegathering.io/v1/cards?types=creature&imageUrl=true&pageSize=20&page=1`)
        .then(res => res.json())
        .then((data) => {
            //update state with returned JSON Object
            this.setState({ cards: data })
            console.log(this.state.cards);
        })
        .catch(console.log)
    }

    render() {
        //reassigning stateful variables to const for easier readability
        const cardsObj = this.state.cards;
        // const waiting = this.state.waiting;
        // const isWaiting = (
        // )
        const returnedVals = cardsObj.map(card => {
            // console.log(cardsObj);
            return ( 
                <div>
                    <MagicCard 
                        name={`Name: ${returnedVals.name}`}
                        imageUrl={returnedVals.imageUrl}
                        artist={`Artist: ${returnedVals.artist}`}
                    />
                </div>
            );
        })
        
        return (
            <MagicCard />
        )
    }
}
export default CardWrapper;
