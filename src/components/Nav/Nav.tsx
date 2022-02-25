import { Link, useLocation } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';
import { NavStyles } from './styles';

interface NavProps {
  openSearchRecipe: () => void;
  authState: string;
  signOut: () => void;
}

const Nav = (props: NavProps) => {
  const { openSearchRecipe, authState, signOut } = props;
  console.log('NAV authState', authState )

  const { pathname } = useLocation();

  const openSearchBox = () => {
    openSearchRecipe();
  }

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
        <li className='nav-list__item nav-list__item--sign'>
          { authState === 'signedin' ? (<span className="signout" onClick={signOut}>Sign out</span>) : (<Link to='/signin'>Sign In</Link>)}
        </li>
        
      </ul>
    </NavStyles>
  )
}

export default Nav