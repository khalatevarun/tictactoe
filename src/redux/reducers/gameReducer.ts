import {
  gameDataType,
  onboardDataType,
} from '../../utils/propTypes';
import findCurrentOutcome from '../../utils/findCurrentOutcome';
import { NEW_GAME, PLAY_TURN, RESET_GAME, START_GAME, UNDO_MOVE } from '../../constants/actionTypes';

const initialState: gameDataType = {
  players: {
    player1: null,
    player2: null,
  },
  currentPlayer: null,
  currentOutcome: 0,
  playedSquaresSequence: [],
  movesTracker: Array(9).fill(0),
  gameStatus:  'paused',
  undoPlayer1: 0,
  undoPlayer2: 0,
  undoMovesPerPlayer:0,
};

const gameReducer = (
  state: gameDataType = initialState, 
  action: {type: string, payload?: onboardDataType | number}
) => {
  switch(action.type) {
    case START_GAME:
      const onboardData = action.payload as onboardDataType;
      return {
        ...state,
        players: {
          player1: onboardData.players.player1,
          player2: onboardData.players.player2,
        },
        currentPlayer: 1,
        undoPlayer1: onboardData.undoMovesPerPlayer,
        undoPlayer2: onboardData.undoMovesPerPlayer,
        undoMovesPerPlayer: onboardData.undoMovesPerPlayer,
      };
      
    case PLAY_TURN:
      const newMovesTracker = [...state.movesTracker];
      const currentPosition = action.payload as number;
      if (state.currentPlayer !== null) {
        newMovesTracker[currentPosition] = state.currentPlayer;

        return {
          ...state,
          currentPlayer: state.currentPlayer === 1 ? 2 : 1,
          currentOutcome: findCurrentOutcome(newMovesTracker),
          playedSquaresSequence: [...state.playedSquaresSequence, currentPosition],
          movesTracker: newMovesTracker,
          gameStatus:'playing',
        };
      }
      return {
        ...state,
      };

    case UNDO_MOVE:
      const oldMovesTracker = [...state.movesTracker];
      const undoPlayer = action.payload as number;
      const lastPlayedSquare = state.playedSquaresSequence[state.playedSquaresSequence.length - 1];
      oldMovesTracker[lastPlayedSquare] = 0;
      const newPlayedSquaresSequence = [...state.playedSquaresSequence];
      newPlayedSquaresSequence.pop();
     
      if (state.currentOutcome === 0 && state.playedSquaresSequence.length !== 0) {
        return {
          ...state,
          currentPlayer: state.currentPlayer === 1 ? 2 : 1,
          movesTracker: oldMovesTracker,
          playedSquaresSequence: newPlayedSquaresSequence,
          undoPlayer1:undoPlayer===1?state.undoPlayer1-1:state.undoPlayer1,
          undoPlayer2: undoPlayer===2?state.undoPlayer2-1:state.undoPlayer2,
        };
      }
      return {
        ...state,
      };

    case RESET_GAME:
      console.log("RESETTING GAME >>>>",state.undoMovesPerPlayer);
      return {
        ...state,
        currentPlayer: 1,
        currentOutcome: 0,
        playedSquaresSequence: [],
        movesTracker: Array(9).fill(0),
        gameStatus:'paused',
        undoPlayer1:state.undoMovesPerPlayer,
        undoPlayer2:state.undoMovesPerPlayer,
      };

    case NEW_GAME:
      return {
        ...state,
        players: {
          player1: null,
          player2: null,
        },
        currentPlayer: 1,
        currentOutcome: 0,
        playedSquaresSequence: [],
        movesTracker: Array(9).fill(0),
        gameStatus:'paused',
        undoPlayer1:state.undoMovesPerPlayer,
        undoPlayer2:state.undoMovesPerPlayer,
      };
    default:
      return {
        ...state,
      };
  };
};

export default gameReducer;
