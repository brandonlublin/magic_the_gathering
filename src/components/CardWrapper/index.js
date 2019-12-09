import React, { Component } from 'react';
import MagicCard from '../MagicCard';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { Col, Row, Preloader } from 'react-materialize';
import Container from 'react-materialize/lib/Container';
import InfiniteScroll from 'react-infinite-scroller';
import { getCards, queryCards } from '../../utils/api';
import Header from '../Header';

class CardWrapper extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            cards: [],
            isLoading: true,
            err: '',
            hasMore: true,
            orderBy: 'name',
            pageNum: 1,
            pageSize: 20,
            query: ''
        }
        this.loadMore = this.loadMore.bind(this);
        this.handleSearchChange = this.handleSearchChange.bind(this);
        this.handleDropdownChange = this.handleDropdownChange.bind(this);
    };


    //once component mounts, run query of axios to return JSON
    async componentDidMount() {
        const { pageNum, orderBy, pageSize } = this.state;
        //storing pageNum as an individual value so i can iterate through pages as page scrolls
        try {
            const cards = await getCards(pageNum, orderBy, pageSize);
            this.setState({cards: cards, isLoading: false});
        } catch(e){
            console.log (e);
        }
    }
    //async function to ensure that state is updated simultaneously, rather than wait to re-render
    async loadMore() {
        const { pageNum, orderBy, cards } = this.state;
        const nextPage = pageNum + 1;

        try {
            const moreCards = await getCards(nextPage, orderBy, 20)
            //appending container with new cards returned
            this.setState({ cards: [...cards, ...moreCards] , pageNum: nextPage})
        } catch(e) {
            console.log(e);
        }
    }
    //async function to ensure that state is updated simultaneously, rather than wait to re-render
    async handleSearchChange(query) {
        const { orderBy, pageSize } = this.state;
        this.setState({ isLoading: true })
        try {
            const cards = await queryCards(query, orderBy, pageSize)
            this.setState({cards: cards, isLoading: false});
        } catch(e) {
            console.log(e)
        }
    }
    //async function to ensure that state is updated simultaneously, rather than wait to re-render
    async handleDropdownChange(orderBy) {
        this.setState({ isLoading: true, orderBy: orderBy })
        try {
            const cards = await getCards(1, orderBy, 20)
            cards.map(card => (card)); //
            this.setState({ cards: cards, isLoading: false, pageNum: 1})
        } catch(e) {
            console.log(e);
        }
    }

    render() {
        
        //reassigning stateful variables to const for easier readability
        const cardsArray = this.state.cards;
        //spinning loader html
        const loading = (
            <Col s={12}>
                <Preloader
                    active={true}
                    color='blue'
                    flashing={false}
                    size='big'
                />
            </Col>
        )
        //iterating through the cardsArray and creating a magic card for each card result returned from API
        if (!cardsArray || !cardsArray.length) {
            return (
                <React.Fragment>
                    <Header searchDisabled={true} />
                    {loading}
                </React.Fragment>
            );
        }
        const list = cardsArray.map((card, i) => {
            return (
                <Col m={4} key={i}>
                    <MagicCard 
                        name={card.name}
                        imageUrl={card.imageUrl}
                        artist={`Artist: ${card.artist}`}
                        type={`Type: ${card.type}`}
                        set={`Set: ${card.set}`}
                    />
                </Col>
            )
        });
        return (
            <div>
            <Header handleSearchChange={this.handleSearchChange} handleDropdownChange={this.handleDropdownChange} searchDisabled={false}/>
            <InfiniteScroll
                        pageStart={0}
                        loadMore={this.loadMore}
                        hasMore={this.state.hasMore}
                        loader={<div className='loader' key={0}>Loading ...</div>}
                    >
            <Container fluid='true'>
                <Row>
                    {this.state.isLoading ? loading : <div className='list'>{list}</div>}
                    {/* looping through each card returned from api, and display loading ring until results returned */}
                </Row>     
            </Container>
            </InfiniteScroll>
            </div>
        );
    }
}

export default CardWrapper;
