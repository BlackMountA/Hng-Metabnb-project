
import './Nft.css'

const Nft = ({image}) => {
  return (
      <div >
      <div className="nft">
        <div className='nft1'>
        <img src={image} alt='NFT1' />
        <div className='nft-text'>
          <p  className='nft-name'>Desert King</p>
          <p className='nft-price'>1MBT per night</p>
        </div> 
      <div className='nft-description'>
          <p className='location'>2345km away</p>
          <p className='period'>available for 2weeks stay</p>
              </div>  
        </div>
        </div>
      </div>
  )
}

export default Nft