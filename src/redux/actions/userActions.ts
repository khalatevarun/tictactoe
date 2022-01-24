import { leaderboardUserDataType } from '../../types';
import { UPDATE_LEADERBOARD } from '../../constants/actionTypes';

export function updateLeaderboard(usersData: leaderboardUserDataType) {
  return {
    type: UPDATE_LEADERBOARD,
    payload: usersData,
  }
};
