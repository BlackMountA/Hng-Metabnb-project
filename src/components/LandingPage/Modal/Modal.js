import './Modal.css'
import X from './x.svg'
import DownBtn from './DownBtn.svg'
import WalletConnect from './WalletConnect.png'

const Modal = () => {
  return (
      <div className='modal-container'>
          <div className='modal'>
              <div className='modal__header'>
                  <h2>Connect Wallet</h2>
                  <img src={X} alt='cancel- button' />
              </div> 
              <div className='modal__content'>
                  <p>Choose your preferred wallet</p>
                    <section>
                      <div>
                          <img src={WalletConnect} alt="metamask logo" />
                          <p>MetaMask</p> 
                          
                      </div>
                      <img src={DownBtn} alt='Down Btn' />
                  </section>
                  <section>
                  <div>
                      <img src={WalletConnect} alt='walletconnect Logo' />
                      <p>WalletConnect</p>
                      </div>
                      <img src={DownBtn} alt='Down Btn' />
                  </section>
                  
              </div>
          </div>
      </div>
  )
}

export default Modal