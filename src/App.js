import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Login from './pages/login'
import Dashboard from './pages/dashboard'
import 'antd/dist/antd.css';

function App() {
  return (
    <div>
      <Switch>
        <Route
          path='/login'
          exact={true}
          component={Login}
        />

        <Route
          path='/dashboard'
          exact={true}
          component={Dashboard}
        />
      </Switch>
    </div>
  );
}

export default App;
