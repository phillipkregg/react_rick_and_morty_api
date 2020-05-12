import React, { useState, useEffect } from 'react';
import TodoContent from '../components/TodoContent';
import Pagination from '../components/Pagination';

export default function TodoPage() {
  const [todos, setTodos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const changePage = (evt) => {
    if (evt === 'previous') setCurrentPage(currentPage - 1);
    if (evt === 'next') setCurrentPage(currentPage + 1);
  };

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character/?page=' + currentPage)
      .then((data) => {
        return data.json();
      })
      .then((character) => {
        setTodos(character.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [currentPage]);
  return (
    <div>
      <h1>Current Page: {currentPage}</h1>
      <Pagination currentPage={currentPage} onChange={changePage} />
      {todos.map((character) => {
        return <TodoContent key={character.id} character={character} />;
      })}
    </div>
  );
}
