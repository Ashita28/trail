import { category_img } from '../assets/home/index'
import '../styles/categoriesStyles.css'

const Categories = () => {
  return (
    <main className='category-cls'>
    <h1>Order.uk Popular Categories 🤩</h1>
    <section className='category-card'>
      <img src={category_img} alt="catgory-img"/>
      <div className='category-content'>
        <p>Burgers & Fast food</p>
        <p className='res-no'>21 Restaurants</p>
      </div>
    </section>
    </main>
  )
}

export default Categories
