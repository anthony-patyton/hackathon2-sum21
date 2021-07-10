import { useState } from 'react';
import { AuthConsumer } from "../../providers/AuthProvider";
import { BackgroundStyles } from '../styledComponents/sharedStyles';

const Login = ({ handleLogin, history }) => {
  const [user, setUser] = useState({ email: '', password: '' })
  
  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(user, history);
  }
  
  return (
    <>
    <BackgroundStyles>
      <h1>Login</h1>
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
        <button type='submit'>Submit</button>
      </form>
      </BackgroundStyles>
    </>
  )
  
}

const ConnectedLogin = (props) => (
  <AuthConsumer>
    { auth => <Login {...props} {...auth} />}
  </AuthConsumer>
)

export default ConnectedLogin;