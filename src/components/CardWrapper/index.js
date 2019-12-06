import React, { Component } from "react";
import axios from "axios";
import "./style.css";
import MagicCard from "../MagicCard";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Col, Row, Preloader } from "react-materialize";
import Container from "react-materialize/lib/Container";

class CardWrapper extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            cards: [],
            isLoading: true,
            err: ""
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

    //once component mounts, run query of axios to return JSON
    componentDidMount() {
        let pageLoadNum = 1;
        const urlQ = `https://api.magicthegathering.io/v1/cards?types=creature&imageUrl=true&pageSize=20&page=${pageLoadNum}`;

        this.queryAxios(urlQ);
    }

    render() {
        //reassigning stateful variables to const for easier readability
        const cardsObj = this.state.cards;
        const loading = (
            <Col s={12}>
                <Preloader
                    active="true"
                    color="blue"
                    flashing={false}
                    size="big"
                />
            </Col>
        )
        const list = cardsObj.map(card => {
            return (
                <Col m={4}>
                    <MagicCard 
                        name={`Name: ${card.name}`}
                        imageUrl={card.imageUrl}
                        artist={`Artist: ${card.artist}`}
                        type={`Type: ${card.type}`}
                        set={`Type: ${card.set}`}
                    />
                </Col>
            )
        });
        return (
            <div>
            <Container fluid="true">
                <Row>
                {this.state.isLoading ? loading : <div className="list">{list}</div>}
                </Row>
            </Container>
            </div>
        );
    }
}
export default CardWrapper;
