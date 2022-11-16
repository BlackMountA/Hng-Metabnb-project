// import { Link } from "react-router-dom"
import Setting from './Settings.svg'
import './CategoriesBar.css'

const Categories = () => {
  return (
      <div className='sub-nav'>
          <div className='categories-bar'>
          <ul>
              <li>Resturant</li>
              <li>Cottage</li>
              <li>Castle</li>
              <li>Fantast city</li>
              <li>beach</li>
              <li>Carbins</li>
              <li>Off-grid</li>
              <li>Farm</li>
              </ul>
             
        <div className='sub-nav__right' >
              <p>Location</p>
              <img src={Setting} alt='settings' />
              
        </div>
        </div> 
      </div>
  )
}

export default Categories