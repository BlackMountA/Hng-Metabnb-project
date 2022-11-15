import logo from './Group.png'
import './Navbar.css'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
      <nav>
          <img src={logo} alt='MetaBnb' />
          <div className='navbar'>
              <ul>
                  <li><Link to={'/'}>Home</Link></li>
                  <li> <Link to={'/PlacetoStay'}> Place to Stay </Link></li>
                  <li>NFTs</li>
                  <li>Community</li>
              </ul>
          </div>
          <button className='navbar__btn'>Connect Wallet</button>
      </nav>
  )
}

export default Navbar