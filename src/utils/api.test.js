import { getCards, queryCards } from './api'

//test that getCards returns values from API
describe('get Cards', () => {
    test('it loads api data', async () => {
        const cards = await getCards(1, 'name', 20);

        expect(cards).toBeTruthy();
    }, 100000);
})

//test that queryCards returns values from API
describe('get queryCards', () => {
    test('it loads api data', async () => {
        const cards = await queryCards('a', 'name', 20);

        expect(cards).toBeTruthy();
    }, 100000);
})