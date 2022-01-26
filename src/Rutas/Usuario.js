import React from 'react';
import { useParams } from 'react-router-dom';

export const Usuario = () => {
    let {username} = useParams()
  return <div>
      <h1>
          bienvenido usuario <b>{username}</b>
      </h1>
  </div>;
};
