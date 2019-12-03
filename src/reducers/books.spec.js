/* eslint-disable no-undef */
import reducer from './books';

describe('Testing the book reducer', () => {
  it('Is defined when nothing is passed', () => {
    expect(reducer(undefined, { type: 'Anything' })).toBeDefined();
  });
  it('Adds a book when the ADD BOOK action is passed', () => {
    const initialState = {
      books: [
        { id: 1, title: 'Cañitas', category: 'Horror' },
        { id: 2, title: 'It', category: 'Horror' },
        { id: 3, title: 'Hellraiser', category: 'Horror' },
      ],
    };
    const expectedState = {
      books: [
        { id: 1, title: 'Cañitas', category: 'Horror' },
        { id: 2, title: 'It', category: 'Horror' },
        { id: 3, title: 'Hellraiser', category: 'Horror' },
        { id: 4, title: 'The Raven', category: 'Horror' },
      ],
    };
    const action = { type: 'ADD_BOOK', book: { id: 4, title: 'The Raven', category: 'Horror' } };
    const result = reducer(initialState, action);
    expect(result).toEqual(expectedState);
  });

  it('Removes a book when the REMOVE BOOK action is passed', () => {
    const initialState = {
      books: [
        { id: 1, title: 'Cañitas', category: 'Horror' },
        { id: 2, title: 'It', category: 'Horror' },
        { id: 3, title: 'Hellraiser', category: 'Horror' },
      ],
    };
    const expectedState = {
      books: [
        { id: 1, title: 'Cañitas', category: 'Horror' },
        { id: 3, title: 'Hellraiser', category: 'Horror' },
      ],
    };
    const action = { type: 'REMOVE_BOOK', id: 2 };
    const result = reducer(initialState, action);
    expect(result).toEqual(expectedState);
  });
});
