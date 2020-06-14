import React from "react";
import { Wrapper } from "./index.style";
import Keyboard from "react-mk";
import { Link } from "react-router-dom";

const WelcomeScreen = () => {
  return (
    <Wrapper>
      <p className="first">
        <Keyboard
          sentenceDelayPerCharRange={[0, 0]}
          keyPressDelayRange={[50, 70]}
        >
          {({ type }) => type(1000, "Work in Progress, جاري تحديث الموقع")}
        </Keyboard>
      </p>
      <p className="first">
        <Keyboard
          sentenceDelayPerCharRange={[0, 0]}
          keyPressDelayRange={[50, 70]}
        >
          {({ type }) => type(1000, "Hi")}
        </Keyboard>
      </p>
      <div className="second">
        <p>
          <Keyboard
            sentenceDelayPerCharRange={[0, 0]}
            keyPressDelayRange={[50, 70]}
          >
            {({ type }) => type(1500, "I'm\xa0")}
          </Keyboard>
        </p>

        <p className="red">
          <Keyboard
            sentenceDelayPerCharRange={[0, 0]}
            keyPressDelayRange={[50, 70]}
          >
            {({ type }) => type(2000, "Ahd Hani")}
          </Keyboard>
        </p>
      </div>
      <p className="third">
        <Keyboard
          sentenceDelayPerCharRange={[0, 0]}
          keyPressDelayRange={[50, 70]}
        >
          {({ type }) => type(2800, "I'm a Mobile And Web Developer.")}
        </Keyboard>
      </p>
      <br />
      <Link to="/bio" className="green">
        <Keyboard
          sentenceDelayPerCharRange={[0, 0]}
          keyPressDelayRange={[50, 70]}
        >
          {({ type }) => type(6000, "Press To Start")}
        </Keyboard>
      </Link>
      {/* <p>
        <Keyboard
          sentenceDelayPerCharRange={[0, 0]}
          keyPressDelayRange={[50, 70]}
        >
          {({ type }) => type(9000, "OR")}
        </Keyboard>
      </p> */}
      {/* <p className="green">
        <Keyboard
          sentenceDelayPerCharRange={[0, 0]}
          keyPressDelayRange={[50, 70]}
        >
          {({ type }) => type(10000, "Simple & Quick View")}
        </Keyboard>
      </p> */}
    </Wrapper>
  );
};

export default WelcomeScreen;
