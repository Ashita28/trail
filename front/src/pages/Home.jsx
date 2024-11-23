import '../styles/homeStyles.css'
import {cart, fwd_btn, location} from '../assets/home/index'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import Deals from '../components/Deals'
import Categories from '../components/Categories'
import Restaurants from '../components/Restaurants'

const Home = () => {
  return (
    <main className='home-cls'>
      <section className='topbar'>
        <p>🌟 Get 5% Off your first order, <span>Promo: ORDER5</span></p>
        <div className='sub-cls'>
          <div className='location-cls'>
            <img src={location} alt='location-icon'/>
            <p>Regent Street, A4, A4201, London <span>Change Location</span></p>
          </div>
          <button className='btn'>
            <img src={cart} alt='cart'/>
            My cart
            <img src={fwd_btn} alt='forward-icon'
              style={{
                paddingLeft: "3rem" 
              }}
            />
          </button>
        </div>
      </section>
      <Navbar/>
      <HeroSection/>
      <Deals/>
      <Categories/>
      <Restaurants/>
    </main>
  )
}

export default Home
