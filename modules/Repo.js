import React from 'react';

export default ({params}) => (
  <div>
    <h2><small>{params.userName}/</small>{params.repoName}</h2>
  </div>
);
