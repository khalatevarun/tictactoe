import { Navigate, BrowserRouter, Route, Routes } from 'react-router-dom';
import * as ROUTES from '../src/constants/routes';
import Home from './Pages/Home/Home';
import LeaderBoard from './Pages/LeaderBoard/LeaderBoard';
import Playground from './Pages/Playground/Playground';

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