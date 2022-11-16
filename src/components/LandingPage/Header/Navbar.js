import logo from './Group.png'
import './Navbar.css'
import { Link } from 'react-router-dom'

import './Modal.css'
import X from './x.svg'
import DownBtn from './DownBtn.svg'
import WalletConnect from './WalletConnect.png'
import {  useState } from 'react'

const Navbar = () => {
    const [sidebar, Setsidebar] = useState(false)
    const [modal, Setmodal] = useState(false);
    // const navRef = useRef()
    const onToggling = () => {
            Setsidebar(!sidebar)
    }
    const onToggle = () => {
        Setmodal(!modal) 
        }
   
    
    return (
        <div className='navbar-container'>
            
            {sidebar && (
                    <div class="mobile-nav">   
    
    <ul class="mobile-nav__links">
      
        <li class="mobile-nav__link mobile-nav__link--spe"><a href="/"> Home </a> 
      <img src={X}  alt='cancel- button' onClick={onToggling}></img>
     </li>
    
        <li className="mobile-nav__link"><a href="/">Place to Stay</a></li>
      
      
        <li class="mobile-nav__link"><a href="/"> Nfts </a></li>
      
      
        <li class="mobile-nav__link"><a href="/"> Community </a></li>
      </ul>
      <button  onClick={onToggle}>Connect Wallet</button>
    </div>
           
            )}
           
           
              
            <nav >
               
          <img src={logo} alt='MetaBnb' />
          <div className='navbar'>
              <ul>
                  <li><Link to={'/'} className='navbar__links'>Home</Link></li>
                  <li> <Link to={'/PlacetoStay'} className='navbar__links'> Place to Stay </Link></li>
                  <li><Link to={'/'} className='navbar__links'>NFTs</Link></li>
                  <li><Link to={'/'} className='navbar__links'>Community</Link></li>
              </ul>
          </div>
                    <button className='navbar__btn' onClick={onToggle}>Connect Wallet</button>
                 <div class="menu__buttons" onClick={onToggling}>
      <div class="menu__button"></div>
      <div class="menu__button"></div>
      <div class="menu__button"></div>
    </div>   
                    
            </nav>
            




            {modal && (
<div className='modal'>
                <div className='overlay' onClick={onToggle}></div>
          
        <div className='modal-container'>
              <div className='modal__header'>
                  <h2>Connect Wallet</h2>
                  <img src={X}  alt='cancel- button' onClick={onToggle}></img>
              </div> 
              <div className='modal__content'>
                  <p>Choose your preferred wallet</p>
                    <section id='metamask'>
                      <div>
                          <img src={WalletConnect} alt="metamask logo" />
                          <p>MetaMask</p> 
                          
                      </div>
                      <img src={DownBtn} alt='Down Btn' />
                  </section>
                  <section>
                  <div>
                      <img src={WalletConnect} alt='walletconnect Logo' />
                      <p>Wallet Connect</p>
                      </div>
                      <img src={DownBtn} alt='Down Btn' />
                  </section>
                  
              
          </div>
                    </div>
                    </div>
            
            )}
            </div>
  )
}

export default Navbar