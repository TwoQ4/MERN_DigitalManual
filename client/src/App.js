import React from 'react';
import Navbar from './components/Navbar/Navbar';
import {useLocation} from 'react-router-dom';
import {useRoutes} from './routes';
import {AuthContext} from './context/AuthContext';
import {useAuth} from './hooks/auth.hook';
import ScrollToTop from './hooks/scrollToTop.hook';
//import { useTransition, animated } from 'react-spring'

import './App.scss';

function App() {

  const {login, logout, token, userId, isReady} = useAuth();
  const isLogin = !!token
  const routes = useRoutes(isLogin);

  const location = useLocation();
  console.log(location);

  //const transitions = useTransition(location, (location) => location.key, {});


  return (
    <>
    <AuthContext.Provider value={{login, logout, token, userId, isReady, isLogin}}>
      <div className="app">
          <Navbar />
            <main className="container">
            {routes}
            <ScrollToTop />
            </main>
      </div>
    </AuthContext.Provider>
    </>
  );
}

export default App;
