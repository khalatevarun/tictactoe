import { Navigate, BrowserRouter, Route, Routes } from 'react-router-dom';
import * as ROUTES from '../src/constants/routes';
import Home from './views/Home/Home';
import LeaderBoard from './views/LeaderBoard/LeaderBoard';
import Playground from './views/Playground/Playground';

const AppRouter = () => {
    return (
        <>
            <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path={ROUTES.PLAYGROUND}  element={<Playground/>}/>
                <Route path={ROUTES.LEADERBOARD} element={<LeaderBoard/>}/>
                <Route path="*" element={<Navigate to={ROUTES.HOME} />}/>
            </Routes>
            </BrowserRouter>
        </>
    )
}


export default AppRouter;