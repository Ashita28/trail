import '../styles/navbarStyles.css'
import { logo } from '../assets/login'
import { user } from '../assets/home'

const Navbar = () => {
  return (
    <nav className="navbar-cls">
      <img className='logo-cls' src={logo} alt='logo'/>
      <div className='menu-cls'>
        <button className='selected-btn'>Home</button>
        <button className='menu-btn'>Browse Menu</button>
        <button className='menu-btn'>Special Offers</button>
        <button className='menu-btn'>Restaurants</button>
        <button className='menu-btn'>Track Order</button>
        <button className='login-btn'>
          <img src={user} alt='profile'/>
          Login/Signup
        </button>
      </div>
    </nav>
  )
}

export default Navbar
