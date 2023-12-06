import React, { useEffect } from 'react';

import Cookies from 'js-cookie';
import Login from './Login';
import { checkLoggedIn } from '../../services/api';

const LoginPage = () => {

  useEffect(() => {
    checkLoggedIn();
  }, []);

  return <Login />;
};

export default LoginPage;
