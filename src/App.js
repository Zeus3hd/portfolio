import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import WelcomeScreen from "./components/WelcomeScreen";
import BottomButtons from "./components/BottomButtons";
import { Wrapper } from "./index.style";
import vhsImg from "./imgs/vhs.jpg";
import "./App.css";
function App() {
  return (
    <Router>
      <Wrapper className="App" bg={vhsImg}>
        <Switch>
          <Route exact path="/" component={WelcomeScreen} />
        </Switch>
        <BottomButtons />
      </Wrapper>
    </Router>
  );
}

export default App;
