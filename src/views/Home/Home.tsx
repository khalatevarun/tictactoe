import './home.css';
import homebg3 from '../../assets/homebg4.png';
import { useNavigate } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

const Home = () => {

    const navigate = useNavigate();

    const handleLeaderboard = () => {
        navigate(ROUTES.LEADERBOARD);
    }

    const handlePlayground = () => {
        navigate(ROUTES.PLAYGROUND);
    }
    
    return (
    <div className="home-container">   
        <div className="home-left-container">
            <img src={homebg3}  />
        </div>
        <div className="home-right-container">
            <h1>Welcome to</h1>
            <h1>Yet Another Tic Tac Toe</h1>
            <div className='home-buttons'>
            <button className='primary-button' onClick={handlePlayground} >
                Go to Playground
            </button><br></br><br></br>
            <button className='primary-button' onClick={handleLeaderboard} >
                View Leaderboard
            </button>
            </div>
        </div>
    </div>
    );
}

export default Home;