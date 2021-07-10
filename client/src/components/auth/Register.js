import { useState } from 'react';
import { AuthConsumer } from "../../providers/AuthProvider";

const Register = ({ handleRegister, history }) => {
  const [user, setUser] = useState({ email: '', password: '', passwordConfirmation: '', name: '' }) 
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.password === user.passwordConfirmation) {
      handleRegister(user, history);
    } else {
      alert('Passwords Do Not Match!')
    }
  }
  
  return (
    <>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <input
          autoFocus
          required         
          name='email'
          value={user.email}
          placeholder='Email'
          type='email'
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <input
          required
          name='password'
          value={user.password}
          placeholder='Password'
          type='password'
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        <input
          required
          name='passwordConfirmation'
          value={user.passwordConfirmation}
          placeholder='Password Confirmation'
          type='password'
          onChange={(e) => setUser({ ...user, passwordConfirmation: e.target.value })}
        />
        <button type='submit'>Submit</button>
      </form>
    </>
  )
}

const ConnectedRegister = (props) => (
  <AuthConsumer>
    { auth => <Register { ...props } {...auth} /> }
  </AuthConsumer>
)

export default ConnectedRegister;