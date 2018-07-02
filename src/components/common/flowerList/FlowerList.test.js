import reducer from './flowerListContainer.js';
import defaultFlowers from '../../../../__mocks__/flowers.js';

describe('flowerList reducer', () => {

  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})).toEqual(
      {
        flowers: [],
        searchText: '',
        isLoading: false
      }
    );
  });

  it('should save flowers array when SAVE_FLOWERS action is dispatched', () => {
    expect(
      reducer(undefined, {
        type: 'flowerListContainer/SAVE_FLOWERS',
        flowers: defaultFlowers.flowers
      })
    ).toEqual(
      {
        flowers: [{
          favorite: false,
          id: 7,
          latin_name: 'Daphne alpina',
          name: 'Alpski volcin',
          profile_picture:  '//flowrspot.s3.amazonaws.com/flowers/profile_pictures/000/000/007/medium/L_00010.jpg?1527514226',
          sightings: 0
        },{
          favorite: false,
          id: 14,
          latin_name: 'Ophrys apifera',
          name: 'Bee orchid',
          profile_picture:  '//flowrspot.s3.amazonaws.com/flowers/profile_pictures/000/000/014/medium/L_00010.jpg?1527514642',
          sightings: 0
        }],
        isLoading: false,
        searchText: '',
      }
    );
  });

  it('should update searchText when SAVE_SEARCH_TEXT action is dispatched', () => {
    expect(
      reducer(undefined, {
        type: 'flowerListContainer/SAVE_SEARCH_TEXT',
        text: 'test text'
      })).toEqual({
        searchText: 'test text',
        flowers: [],
        isLoading: false
      });
  });

  it('should update isLoading when UPDATE_LOADING action is dispatched', () => {
    expect(
      reducer(undefined, {
        type: 'flowerListContainer/UPDATE_LOADING',
        bool: true
      })).toEqual({
        searchText: '',
        flowers: [],
        isLoading: true
      });
  });

});
