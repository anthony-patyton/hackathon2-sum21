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
              <Menu.Item>
                Login
               </Menu.Item>
             </Link>
            <Link onClick='/register'>
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
<<<<<<< HEAD
          width='130'
          length='30'
=======
          size='small'
>>>>>>> 7b9237f2268ab8e456c8ce87d3e6ec7c72e17aba
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