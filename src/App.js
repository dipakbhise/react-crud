import React from "react";
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import About from "./Components/Pages/About";
import AddUser from "./Components/Pages/AddUser";
import Contact from "./Components/Pages/Contact";
import Header from "./Components/Pages/Header";
import Home from "./Components/Pages/Home";
import NotFound from "./Components/Pages/NotFound";
import PracticeApi from "./Components/Pages/PracticeApi";

function App() {
  return (
    <div className="App">
    <Router>

    <Header/>

    <Switch>

    <Route exact path="/react-crud" ><Home/></Route>
    <Route exact path="/about" ><About/></Route>
    <Route exact path="/contact" ><Contact/></Route>
    <Route exact path="/user/add" ><AddUser/></Route>
    <Route exact path="/practiceapi" ><PracticeApi/></Route>
    <Route exact path="*"><NotFound/></Route>
    <Redirect to="/"/>

    </Switch>


    </Router>
     
    </div>
  );
}

export default App;
