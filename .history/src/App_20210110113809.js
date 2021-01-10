import logo from './logo.svg';
import './App.css';
import Login from './login/login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Tabledata from "./login/tabledata";

function App() {
  return (
    <div className="App">
     
     <Router>
     <Switch>
          <Route path="/tabledata">
            <Tabledata />
          </Route>
          {/* <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route> */}
        </Switch>
     </Router>

      <Login />
     
    </div>
  );
}

export default App;
