import React, {Component} from 'react'
import './App.css';
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import TicTacToe from "./components/TicTacToe";
import Results from "./components/Results";
import StartButtons from "./components/StartButtons";

export class App extends Component {


  render() {
    return (
        <Router>
          <Switch>
            <Route exact path="/start">
              <StartButtons  />
            </Route>
            <Route exact path="/game">
              <TicTacToe  />
            </Route>
              <Route exact path="/results"  >
                  <Results  />
              </Route>

            <Redirect to='/start'/>
          </Switch>
        </Router>
    );
  }
}

export default App;
