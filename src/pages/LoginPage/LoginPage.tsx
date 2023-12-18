import React, { useEffect } from 'react';

import Cookies from 'js-cookie';
import Login from './Login';
import { checkLoggedIn } from '../../services/authService';

const LoginPage = () => {

  useEffect(() => {
    if(checkLoggedIn()) {
      window.location.href = '/';
    }
  }, []);

  return <Login />;
};

export default LoginPage;
