import logo from './logo.svg';
import './App.css';
import Login from './login/login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";

import Tabledata from "./login/tabledata";

function App() {
  return (
    <div className="App">
     
     <Router>

       <BrowserRouter>

       </BrowserRouter>

       <Switch>
           <Route path="/tabledata">
            <Tabledata />
            </Route>
           <Route path="/">
           <Login />
          </Route>
         </Switch>
       </Router>
     
    </div>
  );
}

export default App;
