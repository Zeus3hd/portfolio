import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import WelcomeScreen from "./components/WelcomeScreen";
import BottomButtons from "./components/BottomButtons";
import Bio from "./components/Bio";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import { Wrapper } from "./index.style";
import vhsImg from "./imgs/vhs.jpg";
import ScoreBar from "./components/ScoreBar";
import "./App.css";
function App() {
  return (
    <Router>
      <Wrapper className="App" bg={vhsImg}>
        <ScoreBar />
        <Switch>
          <Route exact path="/" component={WelcomeScreen} />
          <Route exact path="/bio" component={Bio} />
          <Route exact path="/skills" component={Skills} />
          <Route exact path="/projects" component={Projects} />
        </Switch>
        <BottomButtons />
      </Wrapper>
    </Router>
  );
}

export default App;
