import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import UserPage from './pages/user';
import UserDetailPage from './pages/userDetails';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact={true}>
          <UserPage />
        </Route>
        <Route path='/userDtls'>
          <UserDetailPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
