import {
  leaderboardLocalUserDataType,
  leaderboardUserDataType,
} from '../types';

const saveScores = (participantData: leaderboardUserDataType) => {
  const usersLocalData = localStorage.getItem('Leaderboard');
  let parsedUsersLocalData: leaderboardLocalUserDataType[] = [];
  if (usersLocalData !== null) {
    parsedUsersLocalData = JSON.parse(usersLocalData);
  }

  const isUser1 = parsedUsersLocalData.find(
    userData => userData.name === participantData.player1
  );
  const isUser2 = parsedUsersLocalData.find(
    userData => userData.name === participantData.player2
  );

  const addUserScore = (userName: string, isUser? : leaderboardLocalUserDataType) => {
    if (isUser === undefined) {
      const newParticipantData = {
        name: userName,
        lostMatches: participantData.hasWon !== userName ? 1 : 0,
        wonMatches: participantData.hasWon === userName ? 1 : 0,
      };
      parsedUsersLocalData.push(newParticipantData);
  
    } else {
      if (participantData.hasWon === isUser.name) {
        isUser.wonMatches += 1;
      } else if (participantData.hasWon !== null)  {
        isUser.lostMatches += 1;
      }
    }
  }
  addUserScore(participantData.player1, isUser1);
  addUserScore(participantData.player2, isUser2);

  localStorage.setItem('Leaderboard', JSON.stringify(parsedUsersLocalData));
  return parsedUsersLocalData;
}

export default saveScores;
