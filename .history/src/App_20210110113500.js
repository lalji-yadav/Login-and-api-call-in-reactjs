import logo from './logo.svg';
import './App.css';
import Login from './login/login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">

     <Switch>
          <Route path="/about">
            <Tabledata />
          </Route>
          {/* <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route> */}
        </Switch>

      <Login />
     
    </div>
  );
}

export default App;
