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
import SingleProject from "./components/SingleProject";
import "./App.css";
import VideoPage from "./components/VideoPage";
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
          <Route
            exact
            path="/projects/:id"
            component={() => <SingleProject />}
          />
          <Route exact path="/video/:linkid" component={VideoPage} />
        </Switch>
        <BottomButtons />
      </Wrapper>
    </Router>
  );
}

export default App;
