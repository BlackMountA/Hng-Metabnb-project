import './NFTs.css'
import Nft1 from './Nft1.png'

const NFTs = () => {
  return (
      <div className='Nfts' >
      <div className="NFt">
        <img src={Nft1} alt='NFT1' />
        <div className='nft-text'>
          <p>jcnmcdv</p>
          <p>dnonscm</p>
        </div> 
      <div className='nft-description'>
          <p>jcnmcdv</p>
          <p>dnonscm</p>
      </div>  
      </div>
      <div className="NFt">
        <img src={Nft1} alt='NFT1' />
        <div className='nft-text'>
          <p>jcnmcdv</p>
          <p>dnonscm</p>
        </div> 
      <div className='nft-description'>
          <p>jcnmcdv</p>
          <p>dnonscm</p>
      </div>  
      </div>
    </div>
  )
}

export default NFTs