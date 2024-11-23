import { mcd } from '../assets/home/index'
import '../styles/restaurantsStyles.css'

const Restaurants = () => {
  return (
    <main className='res-cls'>
    <h1>Popular Restaurants</h1>
    <section className='res-card'>
      <img src={mcd} alt="res-img"/>
        <p>McDonald’s London </p>
    </section>
    </main>
  )
}

export default Restaurants
