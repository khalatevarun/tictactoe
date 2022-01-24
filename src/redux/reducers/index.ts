import {
    combineReducers,
   
  } from 'redux';
import gameReducer from './gameReducer';
import usersRankingReducer from './usersRankingReducer';
  
 

export const rootReducer = combineReducers({
    gameData: gameReducer,
    usersData: usersRankingReducer,
  });

