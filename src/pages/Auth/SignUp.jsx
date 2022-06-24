import React, { useState } from 'react'
import '../../styles/Auth.css'
import { useNavigate } from 'react-router-dom'


// Assets
import cat from '../../assets/avatars/cat.png' //<= included in starter code

// Services
// we will import a sign up service momentarily
import { signup } from '../../services/authService'

const SignUp = (props) => {

  //state for tracking errors
  const [msg, setMsg] = useState('')
  const navigate = useNavigate()

  //form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    avatar: cat
  })

  const handleChange = (e) => {
    setMsg('')
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await signup(formData)
      props.handleSignupOrLogin() // set state in App.jsx
      navigate('/posts') // if everything worked, redirect a user
    } catch (error) {
      setMsg(error.message) //caught an error? add it to error state
    }
  }

  return (
    <div className="signup-page">

      <div className='left-container'>

        <div className='form-container'>
          <div className="title-container">
            <h1>Create an Account</h1>
            <h3>Social media for developers</h3>
          </div>
          <form className="register-form" onSubmit={handleSubmit}>
            <input
              required
              name="name"
              type="text"
              autoComplete="off"
              placeholder="Username"
              onChange={handleChange}
              value={formData.name}
            />
            <input
              required
              name="email"
              type="email"
              autoComplete="off"
              placeholder="Email"
              onChange={handleChange}
              value={formData.email}
            />
            <input
              required
              name="password"
              type="password"
              autoComplete="off"
              placeholder="Password"
              onChange={handleChange}
              value={formData.password}
            />

            <button
              autoComplete="off"
              id="avatar-button"
              type="button"
            >Select Avatar</button>

            <button
              autoComplete="off"
              id="submit-button"
              type="submit"
            >SIGN UP</button>
          </form>
        </div>

      </div>

      <div className="right-container">
        Animation Here
      </div>

    </div>
  )
}

export default SignUp