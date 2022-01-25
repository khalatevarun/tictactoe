import './leaderBoard.css';

import React from 'react';

import { useAppSelector } from '../../redux/store/hooks';
import { leaderboardLocalUserDataType } from '../../utils/propTypes';
import Header from '../../components/header/Header';

const LeaderBoard = () => {
  const {
    leaderBoard,
  } = useAppSelector((state) => state.usersData);

  const sortLeaderboardEntries = (entry1: leaderboardLocalUserDataType, entry2: leaderboardLocalUserDataType) => {
    if (entry1.wonMatches < entry2.wonMatches)
      return 1;
    else if (entry1.wonMatches > entry2.wonMatches)
      return -1;
    else return 0;
  }
  
  return (
    <>
    <Header/>
    <div className='leaderboard-container'>
    <div className='leaderboard-outer-container'>
      <h2 className='modal-heading'>
        LeaderBoard
      </h2>
      <div className='leaderboard-users-container'>
        {leaderBoard.sort(sortLeaderboardEntries).map((userDetails, index) => (
          <React.Fragment key={`${userDetails.name} ${index}`}>
            <div className='leaderboard-user-container'>
            
              <div className='leaderboard-user'>
              <h2>{index+1}</h2>
              <h6 className='leaderboard-user-name'>
                {userDetails.name}
              </h6>
              <p className='leaderboard-user-details'>
                <b>Wins:</b> {userDetails.wonMatches} |{' '}
                <b>Losses:</b> {userDetails.lostMatches}
              </p>
              </div>
            </div>
            <hr />
          </React.Fragment>
        ))}
      </div>
    </div>
    </div>
    </>
  )
};

export default LeaderBoard;
