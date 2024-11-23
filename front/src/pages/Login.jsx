/* eslint-disable react/no-unescaped-entities */
import { login_pic, logo } from '../assets/login/index'
import '../styles/loginStyles.css'

const Login = () => {
  return (
    <main className='login-cls'>
      <form className='login-form'>
      <img className='logo-img' src={logo} alt='logo'/>
      <h1>Welcome Back  👋</h1>
      <p>
      Today is a new day. It's your day. You shape it.<br/> 
      Sign in to start ordering.
      </p>
      <div className='sub-form'>
      <label htmlFor='emailaddress'>Email</label>
        <input
          id='emailaddress'
          type='email'
          placeholder='Example@email.com'
        />
        </div>
        <div className='sub-form'>
        <label htmlFor='pwd'>Password</label>
        <input
          id='pwd'
          type='password'
          placeholder='At least 8 characters'
        />
        </div>
        <button className='signin-btn'>Sign in</button>
        <p className='noacc-cls'>Don't you have an account? <span>Sign up</span></p>
      </form>
      <img className='login-img' src={login_pic} alt='login page pic'/>
    </main>
  )
}

export default Login
