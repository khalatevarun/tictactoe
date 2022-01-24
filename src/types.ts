export type leaderboardUserDataType = {
  player1: string,
  player2: string,
  hasWon: string | null,
};

export type leaderboardLocalUserDataType = {
  name: string;
  lostMatches: number;
  wonMatches: number;
};

export type usersRankingDataType = {
  leaderBoard: leaderboardLocalUserDataType[],
};

export type playersDataType = {
  player1: null | string;
  player2: null | string;
}

export type onboardDataType = {
  players:playersDataType;
  undoMovesPerPlayer:number;
}

export type gameDataType = {
  players: playersDataType;
  currentPlayer: null | number;
  currentOutcome: number;
  playedSquaresSequence: number[];
  movesTracker: number[];
  gameStatus: string,
  undoPlayer1: number;
  undoPlayer2: number;
}
