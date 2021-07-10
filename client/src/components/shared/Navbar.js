import { Link, withRouter } from 'react-router-dom';
import { AuthConsumer } from '../../providers/AuthProvider';
import { Menu } from 'semantic-ui-react';

const Navbar = ({ user, handleLogout, history }) => {
  
    const rightNavItems = () => {
      if (user) {
        return(
          <Menu position='right'>
            <Menu.Item>
              <Link onClick={() => handleLogout(history) }>
                Logout
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/jobs">
                Jobs
              </Link>
            </Menu.Item>
          </Menu>
        )
      } else {
        return (
          <Menu position='right'>
            <Menu.Item>
              <Link to='/login'>
                Login
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link to='/register'>
                Register
              </Link>
            </Menu.Item>
          </Menu>
        )
      }
    }

    return (
      <Menu>
        <Link to='/'>
          <img src="https://res.cloudinary.com/dg1eqxvwf/image/upload/v1625945177/logo_jeiv9n.png"
          width='130'
          length='30'
          alt="arrow through tracker"
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