import React, { Component } from "react";
import axios from "axios";
import "./style.css";
import MagicCard from "../MagicCard";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Col, Row, Preloader } from "react-materialize";
import Container from "react-materialize/lib/Container";
import InfiniteScroll from 'react-infinite-scroller';

class CardWrapper extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            cards: [],
            isLoading: true,
            err: "",
            hasMore: true,
            orderBy: 'name'
        }
    };
    //call axios url and update state for cards returned in response
    queryAxios(pageNum, orderBy) {
        this.setState({ isLoading: true }, () => {
            let url = `https://api.magicthegathering.io/v1/cards?types=creature&contains=imageUrl&pageSize=20&pageNum=${pageNum}&orderBy=${orderBy}`;
            axios
            .get(url)
            .then(response => {
                this.setState({
                    cards: response.data.cards,
                    isLoading: false,
                    pageNum: 1,
                })
            //if error in axios query, catch and send error to state
            }).catch(err => {
                this.setState({
                    err: err.mess
                });
            });
        })
    };

    loadMore = (pageNum, orderBy) => {
        this.setState({ isLoading: true }, () => {
            let url = `https://api.magicthegathering.io/v1/cards?types=creature&contains=imageUrl&pageSize=20&pageNum=${pageNum}&orderBy=${orderBy}`;
            axios
            .get(url)
            .then(response => {
                this.setState({
                    cards: [this.state.cards, ...response.data.cards],
                    isLoading: false,
                    pageNum: 2,
                })
            //if error in axios query, catch and send error to state
            }).catch(err => {
                this.setState({
                    err: err.mess
                });
            });
        })
        this.queryAxios(2, this.state.orderBy)
    }

    //once component mounts, run query of axios to return JSON
    componentWillMount() {
        //storing pageNum as an individual value so i can iterate through pages as page scrolls
        this.queryAxios(1, this.state.orderBy);
    }

    render() {
        //reassigning stateful variables to const for easier readability
        const cardsObj = this.state.cards;
        const loading = (
            <Col s={12}>
                <Preloader
                    active={true}
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
                        name={card.name}
                        imageUrl={card.imageUrl}
                        artist={`Artist: ${card.artist}`}
                        type={`Type: ${card.type}`}
                        set={`Set   : ${card.set}`}
                    />
                </Col>
            )
        });
        return (
            <div>
            <Container fluid="true">
                <Row>
                    <InfiniteScroll
                        pageStart={0}
                        loadMore={this.loadmore}
                        hasMore={true}
                        loader={<div className="loader" key={0}>Loading ...</div>}
                    >
                        {this.state.isLoading ? loading : <div className="list">{list}</div>}
                    </InfiniteScroll>
                    {/* looping through each card returned from api, and display loading ring until results returned */}
                </Row>     
            </Container>
            </div>
        );
    }
}

export default CardWrapper;
