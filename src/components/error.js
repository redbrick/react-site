import React from 'react';
import '../core.css';

const Error = ({ code, message, children }) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <h1 style={{ marginLeft: '2em', alignSelf: 'center' }}>
      {code} - {message} :(
    </h1>
    <img
      style={{ borderRadius: '50%', width: 'fit-content', alignSelf: 'center' }}
      src="/glitch_brick.png"
      alt="Glitch Brick"
    />
    <h2 style={{ marginLeft: '3em', alignSelf: 'center' }}>{children}</h2>
  </div>
);

export default Error;
