/* eslint-disable react/no-unescaped-entities */
import { login_pic, logo } from '../assets/login/index'
import '../styles/signupStyles.css'

const Register = () => {
  return (
    <main className='signup-cls'>
      <form className='signup-form'>
      <img className='logo' src={logo} alt='logo'/>
      <h1>Welcome Back  👋</h1>
      <p>Today is a new day. It's your day. You shape it.<br/> 
      Sign up to start ordering.
      </p>
      <div className='sub-sign'>
      <label htmlFor='urname'>Name</label>
        <input
          id='urname'
          type='text'
          placeholder='eg. John A'
        />
        </div>
        <div className='sub-sign'>
        <label htmlFor='phoneno'>Phone Number</label>
        <input
          id='phoneno'
          type='tel'
          placeholder='Enter your 10 digit mobile number'
        />
        </div>
        <div className='sub-sign'>
      <label htmlFor='mailaddress'>Email</label>
        <input
          id='mailaddress'
          type='email'
          placeholder='Example@email.com'
        />
        </div>
        <div className='sub-sign'>
        <label htmlFor='pin'>Password</label>
        <input
          id='pin'
          type='password'
          placeholder='At least 8 characters'
        />
        </div>
        <button className='signup-btn'>Sign in</button>
        <p className='noacc-cls'>Already have an account? <span>Sign in</span></p>
      </form>
      <img className='signup-img' src={login_pic} alt='login page pic'/>
    </main>
  )
}

export default Register
