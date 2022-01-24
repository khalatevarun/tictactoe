import {
  leaderboardLocalUserDataType,
  leaderboardUserDataType,
  usersRankingDataType,
} from '../../types';
import saveScores from '../../utils/saveScores';
import { UPDATE_LEADERBOARD } from '../../constants/actionTypes/userActionTypes';

let localLeaderboard: leaderboardLocalUserDataType[] = [];
if (localStorage.getItem('Leaderboard') !== null) {
  localLeaderboard = [...JSON.parse(localStorage.getItem('Leaderboard') as string)]
}

const initialState: usersRankingDataType = {
  leaderBoard: localLeaderboard,
};

const usersRankingReducer = (
  state = initialState, 
  action: {type: string, payload: leaderboardUserDataType}
) => {
  switch(action.type) {
    case UPDATE_LEADERBOARD:
      return {
        ...state,
        leaderBoard: saveScores(action.payload),
      }
    default:
      return {
        ...state,
      }
  }
}

export default usersRankingReducer;
