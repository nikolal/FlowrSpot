import { combineReducers } from 'redux';
import homeReducer from '../components/home/HomeContainer.js';
import flowerListReducer from '../components/common/flowerList/FlowerListContainer.js';

export default combineReducers({
  homeReducer,
  flowerListReducer
});
