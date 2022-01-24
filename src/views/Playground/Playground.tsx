import './playground.css';

import GameBoard from '../../components/gameBoard/GameBoard';
import WinnerModal from '../../components/winnerModal/WinnerModal';
import { useAppSelector } from '../../redux/store/hooks';
import Header from '../../components/header/Header';
import NameBoard from '../../components/nameBoard/NameBoard';

const Playground = () => {
  const {
    players,
    currentOutcome,
  } = useAppSelector((state) => state.gameData);

 
  const arePlayersInitialized = players.player1 === null && players.player2 === null;

  return (
    <>
      <Header/>
      {currentOutcome !== 0 && (
        <WinnerModal />
      )}
      {arePlayersInitialized ? (
        <NameBoard />
      ): (
      <div className='playground-main-container'>
        <GameBoard />
      </div>
      )}
     
    </>
  )
}

export default Playground;
