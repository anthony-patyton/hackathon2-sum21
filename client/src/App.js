import { Switch, Route } from 'react-router-dom';
import Home from './components/shared/Home';
import Nomatch from './components/shared/Nomatch';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Navbar from './components/shared/Navbar';
import FetchUser from './components/auth/FetchUser';
import ProtectedRoute from './components/auth/ProtectedRoute';
import Jobs from './components/jobs/Jobs';
import JobForm from './components/jobs/JobForm';

const App = () => (
  <>
    <Navbar />
    <FetchUser>
      <Switch>
        <ProtectedRoute exact path='/' component={Home} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Register} />
        <Route exact path='/jobs' component={Jobs} />
        <Route exact path='/jobform' component={JobForm} />
        <Route component={Nomatch} />
      </Switch>
    </FetchUser>
  </>
)

export default App;