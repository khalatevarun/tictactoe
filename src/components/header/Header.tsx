import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import './header.css';


const Header = () => {

return(
<div className="header-container">
    <div className="header-left">
        <div></div>
        <div>Yet Another Tic Tac Toe</div>
    </div>
    <div className="header-right">
        <Link to={ROUTES.HOME}>
            Home
        </Link>
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