import React from "react";
import BreakFast from "./components/BreakFast";
import Dinner from "./components/Dinner";
import Home from "./components/Home";
import Lunch from "./components/Lunch";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';


const App = () => {
  return(
    <>
    <Router>
    <Navbar /> <br /> <br /> 
    <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/breakfast" component={BreakFast} />
          <Route exact path="/lunch" component={Lunch} />
          <Route exact path="/dinner" component={Dinner} />
        </Switch>
    </Router>
  

    
    
    </>
  )
};

export default App;
