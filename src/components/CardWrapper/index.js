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
            loadingMore: false
        }
    };
    //call axios url and update state for cards returned in response
    queryAxios(url) {
        axios
        .get(url)
        .then(response => {
            this.setState({
                cards: response.data.cards,
                isLoading: false,
                pageNum: 1
            })
        //if error in axios query, catch and send error to state
        }).catch(err => {
            this.setState({
                err: err.mess
            });
        });
    };

    scrollQuery(urlq) {
        let newPage = this.state.pageNum;
        let pageLoadNum = this.state.pageNum;
        if (
            window.innerHeight + document.documentElement.scrollTop  !==
            document.documentElement.offsetHeight
        ) {
            newPage = newPage++;
            this.setState({
                loadingMore: true
            });
            this.queryAxios()
        }
    }


    //once component mounts, run query of axios to return JSON
    componentDidMount() {
        let pageLoadNum = this.state.pageNum;
        let urlQ = `https://api.magicthegathering.io/v1/cards?types=creature&imageUrl=true&pageSize=20&page=${pageLoadNum}`;

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
                <InfiniteScroll
                    pageStart={0}
                    loadMore={this.queryAxios}
                    hasMore={true || false}
                    loader={<div className="loader" key={0}>Loading ...</div>}
                >
                    {list}
                </InfiniteScroll>
            </Container>
            </div>
        );
    }
}
export default CardWrapper;
