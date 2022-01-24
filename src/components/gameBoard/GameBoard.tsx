import './gameBoard.css';

import userIcon from '../../../assets/images/userIcon.png';
import {
  playTurn,
  resetGame,
  startNewGame,
  undoTurn,
} from '../../redux/actions/gameActions';
import {
  useAppDispatch,
  useAppSelector,
} from '../../redux/store/hooks';

const GameBoard = () => {
  const dispatch = useAppDispatch();
  const {
    players,
    currentPlayer,
    currentOutcome,
    movesTracker,
    gameStatus,
    undoPlayer1,
    undoPlayer2,
  } = useAppSelector((state) => state.gameData);

  const renderSquares = (movesTracker: number[]) => {
    const squaresArray: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>[] = [];
  
    for (let index = 0; index < 9; index++) {
      squaresArray.push(
        <div 
          className='gameboard-squares' 
          key={index} 
          data-id={index} 
          data-move={movesTracker[index]} 
          onClick={boardSquareOnClick}
        >
          {movesTracker[index] !== 0 && (
            <>
              {movesTracker[index] === 1 ? (
                <>✕</>
              ) : (
                <>〇</>
              )}
            </>)}
        </div>
      )
    }
    return squaresArray;
  }

  const buttonOnClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, isNewGame: boolean) => {
    e.preventDefault();
    if (isNewGame) {
      dispatch(startNewGame());
    } else {
      dispatch(resetGame());
    }
  }
  
  const boardSquareOnClick = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if (currentOutcome === 0) {
      const gameboardSquare = e.target as HTMLElement;
      if (gameboardSquare.dataset.move === '0') {
        dispatch(playTurn(
          Number(gameboardSquare.dataset.id)
        ))
      }
    }
  }

  return (
    <div className='gameboard-game-container'>
      <h2 className='modal-heading gameboard-heading'>
        PlayGround
      </h2>
      <div className="gameboard-outer-container">
     
        <div className="gameboard-player-details">
          <div className='gameboard-sqaures'>✕</div>
          <p>{players.player1}</p>
          <button 
            className='primary-button gameboard-buttons'
            onClick={() => {
              dispatch(undoTurn(1))
            }}
            disabled={currentPlayer===1 || undoPlayer1 <=0 || gameStatus === 'paused' }
          >
          Undo ( {undoPlayer1} left)
          </button>
        </div>
        <div className='gameboard-container'>
          {renderSquares(movesTracker)}
        </div>
        <div className="gameboard-player-details">
          {/* <img src={userIcon} alt='User Icon' className='gameboard-user-icon'/> */}
          <div className='gameboard-sqaures'>〇</div>
          <p>{players.player2}</p>
          <button 
          className='primary-button gameboard-buttons'
          onClick={() => {
            dispatch(undoTurn(2))
          }}
          disabled={currentPlayer===2 || undoPlayer2 <= 0 || gameStatus === 'paused'}
        >
          Undo ( {undoPlayer2} left ) 
        </button>
        </div>
      </div>
      <div className='gameboard-user-container'>
        <h2>
         <b> {currentPlayer === 1 ? players.player1 : players.player2}'s turn</b>
        </h2>
      </div>
      <div className='gameboard-buttons-container'>
      <button  className='primary-button gameboard-buttons'onClick={(e) => buttonOnClick(e, true)}>
            Launch New
          </button>
     <button 
          className='primary-button gameboard-buttons'
          disabled={gameStatus !== 'playing'}
          onClick={() => {
            dispatch(resetGame())
          }}
        >
          Restart
        </button>
      </div>
    </div>
  )
}

export default GameBoard;
