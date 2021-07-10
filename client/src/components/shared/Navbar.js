import { Link, withRouter } from 'react-router-dom';
import { AuthConsumer } from '../../providers/AuthProvider';
import { Menu } from 'semantic-ui-react';

const Navbar = ({ user, handleLogout, history }) => {
  
    const rightNavItems = () => {
      if (user) {
        return(
          <Menu position='right'>
            <Link onClick={() => handleLogout(history) }>
              Logout
             </Link>           
          </Menu>
        )
      } else {
        return (
          <Menu position='right'>
            <Link onClick='/login'>
               Login
             </Link>
            <Link onClick='/register'>
               Register
            </Link>
          </Menu>
        )
      }
    }

    return (
      <Menu>
        <Link onClick='/'>
          <img src="https://res.cloudinary.com/dg1eqxvwf/image/upload/v1625945177/logo_jeiv9n.png"
          size='small'
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