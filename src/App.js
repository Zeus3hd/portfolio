import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import WelcomeScreen from "./components/WelcomeScreen";
import BottomButtons from "./components/BottomButtons";
import TitleScreen from "./components/TitleScreen";
import "./App.css";
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={WelcomeScreen} />
          <Route exact path="/title" component={TitleScreen} />
        </Switch>
        <BottomButtons />
      </div>
    </Router>
  );
}

export default App;
