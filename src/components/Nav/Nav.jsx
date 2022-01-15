import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';
import { NavStyles } from './styles';

const Nav = ({openSearchRecipe, loggedIn, signOut}) => {
  
  const { pathname } = useLocation();

  const openSearchBox = () => {
    openSearchRecipe();
  }

  useEffect(() => {
  }, [loggedIn]);

  return (
    <NavStyles>
      <ul className='nav-list'>
        <li className='nav-list__item'>
          <Link to='/'>Home</Link>
        </li>
        <li className='nav-list__item'>
          <Link to='/about'>About</Link>
        </li>
        { pathname === '/' &&
          (<li className='nav-list__item search'><span onClick={() => openSearchBox()}><SearchIcon/> Search Recipe...</span></li>)
        }
        <li className='nav-list__item'>
          { loggedIn ? (<button onClick={signOut}>Sign out</button>) : (<Link to='/signin'><button>Sign In</button></Link>)
          }
        </li>
        
      </ul>
    </NavStyles>
  )
}

export default Nav