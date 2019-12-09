import axios from 'axios';

//get all cards from API
async function getCards(pageNum, orderBy, pageSize=20) {
    let url = `https://api.magicthegathering.io/v1/cards?types=creature&contains=imageUrl&pageSize=${pageSize}&page=${pageNum}&orderBy=${orderBy}`;
    //ensure api returns value before returning them 
    try {
        const response = await axios.get(url);
        return response.data.cards
    } catch(e) {
        return e;
    }
};

async function queryCards(query, orderBy, pageSize=20) {
    let url = `https://api.magicthegathering.io/v1/cards?name=${query}&types=creature&contains=imageUrl&pageSize=${pageSize}&orderBy=${orderBy}`;
    //ensure api returns value before returning them 
    try {
        const response = await axios.get(url);
        return response.data.cards
    } catch(e) {
        return e;
    }
};

export { queryCards, getCards };