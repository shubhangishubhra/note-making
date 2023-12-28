import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Note from './components/Note';
import SignIn from './signIn';
import Home from './Home';
import '../src/index.css';

export const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check if a user is already signed in
    const email = localStorage.getItem('email');
    if (email) {
      setUser({ email });
    }
  }, []);

  const handleSignIn = (email) => {
    setUser({ email });
  };

  const handleSignOut = () => {
    localStorage.clear();
    setUser(null);
  };

  return (
    <div>
      <Header />
      {user ? (
        <div>
          <Home user={user} onSignOut={handleSignOut} />
          <Note />
        </div>
      ) : (
        <SignIn onSignIn={handleSignIn} />
      )}
    </div>
  );
};

export default App;
