import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react"
import Home from "./components/Home"
import About from "./components/About"
import Menu from "./components/Menu"
import NavBar from "./components/NavBar"
import {
  BrowserRouter as Router, // we are aliasing this module for a cleaner call
  Link, 
  Switch,
  Route,
  // etc.
} from 'react-router-dom';




function App() {
  return (
 
<div>
  <Router>
   <NavBar />
      <Route Home exact path = "/" component={Home}/>
      <Route About path = "/aboutus" component={About}/>
      <Route Menu path= "/Menu" component={Menu} />
  </Router>

    </div>

    
  );
}


export default App;
