import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import WelcomeScreen from "./components/WelcomeScreen";
import BottomButtons from "./components/BottomButtons";
import "./App.css";
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={WelcomeScreen} />
        </Switch>
        <BottomButtons />
      </div>
    </Router>
  );
}

export default App;
