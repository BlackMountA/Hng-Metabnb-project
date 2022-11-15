import './Section1.css'
import Image from './GroupPix.png'
const Section1 = () => {
  return (
      <section className='section1'>
          <div className='side1'>
              <p className='side1__title'>
                  rent a place away from home in the metaverse
              </p>
              <p className='side1__content'>
                  we proivde you with luxury and affordable houses in the metaverse, get a chance to turn your imagination to reality at your comfort
              </p>
              <div className="search-bar">
                  <input type={'search'} placeholder='Search for location' className='search-input' /> <button>Search</button>
                </div>
          </div>
          <div className='side2'>
              <img src={Image} alt='group pix' />
          </div>
      </section>
  )
}

export default Section1