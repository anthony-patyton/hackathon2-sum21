import { Link, withRouter } from 'react-router-dom';
import { AuthConsumer } from '../../providers/AuthProvider';
import { Menu } from 'semantic-ui-react';

const Navbar = ({ user, handleLogout, history }) => {
  
    const rightNavItems = () => {
      if (user) {
        return(
          <Menu position='right'>
            <Link onClick={() => handleLogout(history) }>
              <Menu.Item>
                Logout
              </Menu.Item>
             </Link>           
          </Menu>
        )
      } else {
        return (
          <Menu position='right'>
            <Link to='/login'>
              <Menu.Item>
                Login
               </Menu.Item>
             </Link>
            <Link to='/register'>
              <Menu.Item>
                Register
               </Menu.Item>
            </Link>
          </Menu>
        )
      }
    }

    return (
      <Menu>
        <Link onClick='/'>
          <img src="https://res.cloudinary.com/dg1eqxvwf/image/upload/v1625945177/logo_jeiv9n.png"
          width='130'
          length='30'
          />
        </Link>
        { rightNavItems()}
      </Menu>
    )
  }

  const ConnectedNavbar = (props) => (
    <AuthConsumer>
      { auth =>
        <Navbar {...props} {...auth} />
      }
    </AuthConsumer>
  )

  export default withRouter(ConnectedNavbar);