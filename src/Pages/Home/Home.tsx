import './home.css';

import GameBoard from '../../components/gameBoard/GameBoard';
import LeaderBoard from '../../components/leaderBoard/LeaderBoard';
import NameModal from '../../components/nameModal/NameModal';
import WinnerModal from '../../components/winnerModal/WinnerModal';
import { useAppSelector } from '../../redux/store/hooks';

const Home = () => {
  const {
    players,
    currentOutcome,
  } = useAppSelector((state) => state.gameData);

  const isWinner = currentOutcome !== 0;
  const arePlayersInitialized = players.player1 === null && players.player2 === null;

  return (
    <>
      {isWinner && (
        <WinnerModal />
      )}
      {arePlayersInitialized && (
        <NameModal />
      )}
      {/* <nav className='home-header-container'>
        <h3 className='home-header-text'>Tic Tac Toe</h3>
      </nav> */}
      <main className='home-main-container'>
        <GameBoard />
        {/* <LeaderBoard /> */}
      </main>
    </>
  )
}

export default Home;
