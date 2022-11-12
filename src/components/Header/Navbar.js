import logo from './Group.png'
import './Navbar.css'
const Navbar = () => {
  return (
      <nav>
          <img src={logo} alt='MetaBnb' />
          <div className='navbar'>
              <ul>
                  <li>Home</li>
                  <li>Place to Stay</li>
                  <li>NFTs</li>
                  <li>Community</li>
              </ul>
          </div>
          <button>Connect Wallet</button>
      </nav>
  )
}

export default Navbar