import Logo from './FooterLogo.png'
import InstaLogo from './InstaLogo.svg'
import TwitterLogo from './TwitterLogo.svg'
import FacebookLogo from './FacebookLogo.svg'
import './Footer.css'

const Footer = () => {
  return (
    <footer>
      <div className='footer-container'>
          
          <div className='right-side'>
        <div className='navigations'>
          <h4>Community</h4>
          <ul>
            <li><a href='/' className='navigation-link'>NFTs</a></li>
            <li><a href='/' className='navigation-link'>Tokens</a></li>
            <li><a href='/' className='navigation-link'>Landlords</a></li>
            <li><a href='/' className='navigation-link'>Discord</a></li>
          </ul>
        </div>
        <div className='navigations'>
          <h4>Places</h4>
          <ul>
            <li><a href='/' className='navigation-link'>Castle</a></li>
            <li><a href='/' className='navigation-link'>Farms</a></li>
            <li><a href='/' className='navigation-link'>Beach</a></li>
            <li><a href='/' className='navigation-link'>Learn More</a></li>
          </ul>
        </div>
        <div className='navigations'>
          <h4>About Us</h4>
          <ul>
            <li><a href='/' className='navigation-link'>Roadmap</a></li>
            <li><a href='/' className='navigation-link'>Creators</a></li>
            <li><a href='/' className='navigation-link'>Career</a></li>
            <li><a href='/' className='navigation-link'>Contact Us</a></li>
          </ul>
              </div>
        </div>
        <div className='left-side'>
        <img src={Logo} alt='Company Logo' className='' />
        <div className='footer__social-links'>
          
        <a href='/'><img src={FacebookLogo} alt='Facebook Logo' /></a>
        <a href='/'><img src={InstaLogo} alt='Instagram Logo' /></a>
        <a href='/'><img src={TwitterLogo} alt='Twitter Logo' /></a>
        </div>
        <div className='copyright'>
          &copy; 2022 Metabnb
        </div>
          </div>
      </div>
      
      </footer>
  )
}

export default Footer