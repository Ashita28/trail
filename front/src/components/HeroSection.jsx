import { home_p1, home_p2, home_subbg} from '../assets/home'
import '../styles/herosecStyles.css'

const HeroSection = () => {
  return (
    <main className='herosection'>
      <section className='sub-sec1'>
      <div>
        <p className='sub-heading1'>Order Restaurant food, takeaway and groceries.</p>
        <h1 className='sub-heading2'>Feast Your Senses,<br/>
        Fast and Fresh</h1>
        <p className='sub-heading3'>Enter a postcode to see what we deliver</p>
        <div className='search-cls'>
        <input type='text' placeholder='e.g. EC4R 3TE'/>
        <button>Search</button>
        </div>
        </div>
        <div className='sub-bg'>
        <img className='subbg-img' src={home_subbg} alt='sub-bg'/>
        <div className='person-img-cls'>
        <img className='person1-img' src={home_p1} alt='p1'/>
        <img className='person2-img' src={home_p2} alt='p2'/>
        </div>
      </div>
      </section>
    </main>
  )
}

export default HeroSection
