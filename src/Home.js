import React from 'react';

function Home({ user, onSignOut }) {
  const logout = () => {
    localStorage.clear();
    onSignOut(); // Call the callback function on sign-out
  };

  return (
    <div>
      <h1>Welcome, {user.email}</h1>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default Home;
