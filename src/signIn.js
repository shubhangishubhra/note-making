import React, { useEffect, useState } from 'react';
import { auth, provider } from './firebase-config';
import { signInWithPopup } from 'firebase/auth';
import Home from './Home';

function SignIn({ onSignIn }) {
  const [value, setValue] = useState('');

  const handleClick = () => {
    signInWithPopup(auth, provider).then((data) => {
      setValue(data.user.email);
      localStorage.setItem('email', data.user.email);
      onSignIn(data.user.email); // Call the callback function on successful sign-in
    });
  };

  useEffect(() => {
    setValue(localStorage.getItem('email'));
  }, []);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div>
        {value ? (
          <Home user={{ email: value }} />
        ) : (
          <button onClick={handleClick}>Sign in With Google</button>
        )}
      </div>
    </div>
  );
}

export default SignIn;
