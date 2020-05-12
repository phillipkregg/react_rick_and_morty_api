import React from 'react';

export default function TodoContent(props) {
  const { character } = props;
  const cardStyle = {
    width: '350px',
    margin: '25px',
    marginLeft: '0px',
    padding: '10px',
    display: 'inline-block',
    verticalAlign: 'top',
    boxShadow: '0px 0px 10px #888888',
  };
  return (
    <div className='card' style={cardStyle}>
      <div className='card-body'>
        <h2 className='card-title'>{character.name}</h2>
        <h5>Status: {character.status}</h5>
        <img src={character.image} />
        <a href='/character-info' className='btn btn-primary'>
          Go somewhere
        </a>
      </div>
    </div>
  );
}
