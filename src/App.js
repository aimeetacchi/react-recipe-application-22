import React, { useEffect, useState } from 'react'
import { Auth } from 'aws-amplify';
import { onAuthUIStateChange } from '@aws-amplify/ui-components';

import { Route, Routes, useNavigate } from 'react-router-dom'

import { Search } from './actions/Search'
import { useDispatch } from 'react-redux'
import './App.scss';

import Nav from './components/Nav/Nav.jsx'
import Home from './components/Pages/Home.jsx'
import About from './components/Pages/About/About.jsx'
import SignInForm from './components/Pages/SignInForm/SignInForm'
import Error from './components/Pages/Error.jsx'

import Footer from './components/Footer.jsx';

function App() {
  const [authState, setAuthState] = useState();
  const [user, setUser] = useState();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  

  useEffect(() => {
    
      if(authState === 'signedin') {
        navigate('/');
      }

      return onAuthUIStateChange((nextAuthState, authData) => {
          setAuthState(nextAuthState);
          setUser(authData)
      });
     
  }, [authState]);

  // Sign Out
  const signOut = async () => {
    try {
      await Auth.signOut()
      // setLoggedIn(false)
      navigate('/signin');
    } catch (error) {
      console.log('Error Signing out', error,)
    }
  }

  // Sign in
  // const signIn = async (credentials) => {
  //   const { email, password} = credentials;
  //   const user = await Auth.signIn(email, password);
  //   console.log(user)
  //   navigate('/');
  // }

  const openSearchRecipe = () => {
      console.log('Calling from app..');
      /// Call action to toggle search box...
      dispatch(Search())
  }

  return (
    <div className="App">
      <Nav authState={authState} signOut={signOut} openSearchRecipe={openSearchRecipe} />
    
      <main>
      <Routes>
          <Route exact path="/" element={<Home authState={authState}/>}/>
          <Route path='/about' element={<About/>} />
          <Route exact path="/signin" element={<SignInForm authState={authState}/>}/>
          <Route path="*" element={<Error/>} />
      </Routes>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
