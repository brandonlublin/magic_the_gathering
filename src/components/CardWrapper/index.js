import React, { Component } from 'react';
import axios from "axios";
import './style.css';
import MagicCard from '../MagicCard';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Col, Row, Preloader } from 'react-materialize';
import Container from 'react-materialize/lib/Container';
import InfiniteScroll from 'react-infinite-scroller';

class CardWrapper extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            cards: [],
            isLoading: true,
            isGetting: false,
            err: ''
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
        console.log("the component mounted");
        const page1 = "https://api.magicthegathering.io/v1/cards?types=creature&imageUrl=true&pageSize=20&page=1";

        this.queryAxios(page1);
    }

    render() {
        //reassigning stateful variables to const for easier readability
        const cardsObj = this.state.cards;
        const waiting = this.state.waiting;
        const loading = (
            <Col s={4}>
                <Preloader
                active
                color="blue"
                flashing={false}
                size="big"
                />
            </Col>
        )
        const list = cardsObj.map((card, i) => {
            return (
                <Col m={4}>
                    <MagicCard 
                        card={card}
                        key={i}
                    />
                </Col>
            )
        });
        return (
            <div>
            <Container fluid="true">
                <Row>
                    {list}
                </Row>
            </Container>
                {/* <InfiniteScroll
                    pageStart=""
                    loadMore={this.queryAxios}
                    hasMore={true || false}
                    loader={<div className="loader">Loading ...</div>}>
                </InfiniteScroll> */}
            </div>
        );
        //if waiting 
    }
}
export default CardWrapper;
