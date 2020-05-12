import React from 'react';

export default function Pagination(props) {
  const { currentPage, onChange } = props;

  const handleChange = (e) => {
    console.log(e);
    const target = e.currentTarget;

    debugger;

    switch (target.getAttribute('aria-label')) {
      case 'previous':
        onChange('previous');
        break;
      case 'next':
        onChange('next');
    }
  };

  return (
    <div>
      <nav aria-label='Page navigation example'>
        <ul className='pagination'>
          <li className='page-item'>
            <a
              aria-label='previous'
              className='page-link'
              href='#'
              onClick={(e) => handleChange(e)}
            >
              Previous
            </a>
          </li>
          <li className='page-item'>
            <a className='page-link' href='#'>
              1
            </a>
          </li>
          <li className='page-item'>
            <a className='page-link' href='#'>
              2
            </a>
          </li>
          <li className='page-item'>
            <a className='page-link' href='#'>
              3
            </a>
          </li>
          <li className='page-item'>
            <a
              aria-label='next'
              className='page-link'
              href='#'
              onClick={(e) => handleChange(e)}
            >
              Next
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
