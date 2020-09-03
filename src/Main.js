import React, { Component } from "react";
import {
  Route,
  HashRouter
} from "react-router-dom";
import Header from "../src/components/Header";
import Home from "./Home";
import About from "./About";

class Main extends Component {
  render() {
    return (
      <HashRouter>
        <Header/>
        <div className="home">
          
          <div className="banner">
            <div className="banner__overlay"/>
          </div>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route exact path="/about" component={About}/>
          </div>
          <div className="footer">
            <div className="copyright">
              <p>by Agus Andri Putra</p>
            </div>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default Main;