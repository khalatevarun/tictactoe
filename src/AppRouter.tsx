import { BrowserRouter, Route, Routes } from 'react-router-dom';
import * as ROUTES from '../src/constants/routes';
import Header from './components/header/Header';
import Home from './Pages/Home/Home';
import LeaderBoard from './Pages/LeaderBoard/LeaderBoard';
import Playground from './Pages/Playground/Playground';

const AppRouter = () => {
    return (
        <>
        <BrowserRouter>
        <Header/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path={ROUTES.PLAYGROUND}  element={<Playground/>}/>
            <Route path={ROUTES.LEADERBOARD} element={<LeaderBoard/>}/>
        </Routes>
        </BrowserRouter>
        </>
    )
}


export default AppRouter;