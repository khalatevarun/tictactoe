import { leaderboardUserDataType } from '../../utils/propTypes';
import { UPDATE_LEADERBOARD } from '../../constants/actionTypes';

export function updateLeaderboard(usersData: leaderboardUserDataType) {
  return {
    type: UPDATE_LEADERBOARD,
    payload: usersData,
  }
};
