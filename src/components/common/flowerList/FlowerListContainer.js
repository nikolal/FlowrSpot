// Actions
const SAVE_FLOWERS = 'flowerListContainer/SAVE_FLOWERS';
const SAVE_SEARCH_TEXT = 'flowerListContainer/SAVE_SEARCH_TEXT';
const UPDATE_LOADING = 'flowerListContainer/UPDATE_LOADING';

// Initial State
const initialState = {
  flowers: [],
  searchText: '',
  isLoading: false
};

// Reducer
const flowerListReducer = (state = initialState, action) =>
  action.type === SAVE_FLOWERS ? ({ ...state, flowers: action.flowers }) :
  action.type === SAVE_SEARCH_TEXT ? ({ ...state, searchText: action.text }) :
  action.type === UPDATE_LOADING ? ({ ...state, isLoading: action.bool }) :
  state;

// Action Creators
export const saveFlowersAction = flowers => ({ type: SAVE_FLOWERS, flowers });
export const saveSearchTextAction = text => ({ type: SAVE_SEARCH_TEXT, text });
export const updateLoadingAction = bool => ({ type: UPDATE_LOADING, bool });

export default flowerListReducer;
