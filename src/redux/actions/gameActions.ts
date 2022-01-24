import { onboardDataType, playersDataType } from '../../types';
import {
  NEW_GAME,
  PLAY_TURN,
  RESET_GAME,
  START_GAME,
  UNDO_MOVE,
} from '../../constants/actionTypes';

export const initializeGame = (onboardData: onboardDataType) => {
  return {
    type: START_GAME,
    payload: {
      ...onboardData,
    },
  };
};

export const playTurn = (squareId: number) => {
  return {
    type: PLAY_TURN,
    payload: squareId,
  };
};

export const undoTurn = (currentPlayer:number) => {
  return {
    type: UNDO_MOVE,
    payload:currentPlayer,
  };
};

export const resetGame = () => {
  return {
    type: RESET_GAME,
  };
};

export const startNewGame = () => {
  return {
    type: NEW_GAME,
  };
};
