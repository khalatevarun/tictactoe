import './nameModal.css';

import { useState } from 'react';

import { initializeGame } from '../../redux/actions/gameActions';
import { useAppDispatch } from '../../redux/store/hooks';

const NameModal = () => {
  const dispatch = useAppDispatch();
  const [player1Name, setPlayer1Name] = useState('');
  const [player2Name, setPlayer2Name] = useState('');
  const [undoMovesPerPlayer, setUndoMovesPerPlayer] = useState(0);
  const [errorMessage, setErrorMessage] = useState('');

  const fieldOnchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setErrorMessage('');
    const { name, value } = e.target;
    switch (name) {
      case 'player1-name':
        setPlayer1Name(value.trim());
        break;
      case 'player2-name':
        setPlayer2Name(value.trim());
        break;
      case 'undomoves-perplayer':
        if(Number(value) || value===''){
          setUndoMovesPerPlayer(Number(value));
        }
        break;
    }
  };

  const formOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if(player1Name.toLowerCase() === player2Name.toLowerCase()){
      // players cant have same name
      setErrorMessage("Both players can't have the same. Please enter unique names.");
      return;
    }
    else if (player1Name !== '' && player2Name !== '') {
      dispatch(initializeGame({
        players:{player1: player1Name,
        player2: player2Name},
        undoMovesPerPlayer:undoMovesPerPlayer,
      }));
    }
    else{
      return;
    }
  };

  return (
    <>
      <div className='modal-backdrop'></div>
      <div className='modal-outer-container'>
        <div className='modal-container'>
          <h3 className='modal-heading'>
            Get Onboarded
          </h3>
          <form onSubmit={formOnSubmit} className="name-modal-form">
            <div className='name-modal-field-container'>
              <label
                htmlFor='player1-name' 
                className={`name-modal-text-field-label${player1Name === '' ? '' : ' value-filled'}`}
              >
                Enter Player 1 Name
              </label>
              <input 
                type='text' 
                id='player1-name' 
                name='player1-name' 
                value={player1Name} 
                onChange={fieldOnchange} autoFocus
              />
            </div>
            <div className='name-modal-field-container'>
              <label 
                htmlFor='player2-name' 
                className={`name-modal-text-field-label${player2Name === '' ? '' : ' value-filled'}`}
              >
                Enter Player 2 Name
              </label>
              <input 
                type='text' 
                id='player2-name' 
                name='player2-name' 
                value={player2Name} 
                onChange={fieldOnchange}
              />
            </div>
            <div className='name-modal-field-container'>
              <label 
                htmlFor='undomoves-perplayer' 
                className={`name-modal-text-field-label${errorMessage === '' ? '' : ' value-filled'}`}
              >
                Undo Moves Per Player
              </label>
              <input 
                type='text' 
                id='undomoves-perplayer' 
                name='undomoves-perplayer' 
                value={undoMovesPerPlayer} 
                onChange={fieldOnchange}
              />
            </div>
            <small className='name-modal-text-error'>{errorMessage}</small>
            <div className='name-modal-field-container'>
              <input 
                type='submit' 
                className='primary-button name-modal-submit-button' 
                aria-label='Play' 
                value='Play' 
                disabled={player1Name === '' || player2Name === ''} 
              />
            </div>
          </form>
        </div>          
      </div>
    </>
  )
};

export default NameModal;
