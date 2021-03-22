import React from "react";
import { render } from "react-dom";

class Menu extends React.Component{
    render(){
        return(
            <div className = "menu">
        <h1>Menu</h1>
        <p>Check out our amazing 24/7 menu:
          <ul>
            <li>Lazy Loading</li>
            <li>Dynamic Route Matching</li>
            <li>Location Transition Handling</li>
          </ul>
        </p>
      </div>
        )
    }
}
   




export default Menu