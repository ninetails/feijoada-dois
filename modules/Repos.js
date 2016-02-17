import React from 'react';
import NavLink from './NavLink';

let userName, repo;

const handleSubmit = (history) => {
  if (history) {
    return (event) => {
      event.preventDefault();
      history.push(`/repos/${userName.value}/${repo.value}`);
    };
  }
};

export default ({children, historyAdapter}) => (
  <div>
    <h2>Repos</h2>

    <ul>
      <li><NavLink to='/repos/rackt/react-router'>React Router</NavLink></li>
      <li><NavLink to='/repos/facebook/react'>React</NavLink></li>
      <li>
        <form onSubmit={handleSubmit(historyAdapter)}>
          <input type='text' ref={(c) => userName = c} placeholder='username'/>
          {' / '}
          <input type='text' ref={(c) => repo = c} placeholder='repository'/>
          {' '}
          <button type="submit">Go</button>
        </form>
      </li>
    </ul>

    { children }
  </div>
);
