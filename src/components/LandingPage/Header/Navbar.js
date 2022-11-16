import logo from './Group.png'
import './Navbar.css'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
      <nav>
          <img src={logo} alt='MetaBnb' />
          <div className='navbar'>
              <ul>
                  <li><Link to={'/'} className='navbar__links'>Home</Link></li>
                  <li> <Link to={'/PlacetoStay'} className='navbar__links'> Place to Stay </Link></li>
                  <li><Link to={'/'} className='navbar__links'>NFTs</Link></li>
                  <li><Link to={'/'} className='navbar__links'>Community</Link></li>
              </ul>
          </div>
          <button className='navbar__btn'>Connect Wallet</button>
      </nav>
  )
}

export default Navbar