import MBtoken from './MBTokenLogo.png'
import Metamask from './MetamaskLogo.png'
import Opensea from './Opensea.png'
import './section2.css'
const Section2 = () => {
  return (
    <section className='sponsors'>
      <div className='sponsors__content'>
          <img src={MBtoken} alt='MBtokenLogo' />
          <img src={Metamask} alt='MetamaskLogo' />
        <div className='sponsors__content--opensea'>
          <img src={Opensea} alt='MetamaskLogo' /> <p>OpenSea</p>

        </div>
        </div>
      </section>
  )
}

export default Section2