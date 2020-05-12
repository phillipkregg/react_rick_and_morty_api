import React from 'react';
import { useHistory } from 'react-router-dom';

export default function HomeButton() {
  let history = useHistory();
  function handleClick() {
    history.push('/');
  }
  return (
    <button type='button' className='btn btn-default' onClick={handleClick}>
      Go Home
    </button>
  );
}
