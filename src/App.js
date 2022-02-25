import React, { useEffect, useState } from 'react'
import { Auth } from 'aws-amplify';
import { onAuthUIStateChange, AuthState} from '@aws-amplify/ui-components';

import { Route, Routes, useNavigate } from 'react-router-dom'

import { Search } from './actions/Search'
import { useDispatch } from 'react-redux'
import './App.scss';

import Nav from './components/Nav/Nav'
import Home from './components/Pages/Home'
import About from './components/Pages/About/About'
import SignInForm from './components/Pages/SignInForm/SignInForm'
import Error from './components/Pages/Error'

import Footer from './components/Footer';

function App() {
  const [authState, setAuthState] = useState();
  const [user, setUser] = useState();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  

  useEffect(() => {
    
      if(authState === 'signedin') {
        navigate('/');
      }

      if (authState === undefined) {
        Auth.currentAuthenticatedUser().then(authData => {
          setAuthState(AuthState.SignedIn);
          setUser(authData);
        });
      }
  
      return onAuthUIStateChange((nextAuthState, authData) => {
        setAuthState(nextAuthState);
        setUser(authData);
        console.log('auth state changing');
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
