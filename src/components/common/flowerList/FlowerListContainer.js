// Actions
const SAVE_FLOWERS = 'flowerListContainer/SAVE_FLOWERS';

// Initial State
const initialState = {
  flowers: [],
};

// Reducer
const flowerListReducer = (state = initialState, action) =>
  action.type === SAVE_FLOWERS ? ({
    ...state,
    flowers: action.flowers
  }) :
  state;

// Action Creators
export const saveFlowersAction = flowers => ({ type: SAVE_FLOWERS, flowers });

export default flowerListReducer;
