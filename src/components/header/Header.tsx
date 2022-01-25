import { Link } from 'react-router-dom';
import headerlogo from '../../assets/headerlogo.png';
import * as ROUTES from '../../constants/routes';
import './header.css';


const Header = () => {

return(
<div className="header-container">
    <div className="header-left">
        <div>
            <img src={headerlogo} />
        </div>
        <Link to={ROUTES.HOME}>
            Yet Another Tic Tac Toe
        </Link>
    </div>
    <div className="header-right">
        <Link to={ROUTES.PLAYGROUND}>
            Playground
        </Link>
        <Link to={ROUTES.LEADERBOARD}>
            Leaderboard
        </Link>
    </div>
</div>
)
}

export default Header;