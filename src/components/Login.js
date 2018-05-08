import React from 'react';

export default function Login({ onLoginClick }) {
  return (
    <div>
      <label>Username:</label>
      <input type="text" />
      <label>Username:</label>
      <input type="password" />
      <button onClick={onLoginClick}>Login</button>
    </div>
  );
}

// Login.propTypes = {
//   onLoginClick: PropTypes.func.isRequired,
// };
