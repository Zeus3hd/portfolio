import React, { useState, useEffect } from "react";
import { ScoreBarCom, ScoreGroup } from "./index.style";
import { useLocation } from "react-router-dom";
const ScoreBar = () => {
  const [seconds, setSeconds] = useState(0);
  const [world, setWorld] = useState("0-0");
  const [isActive, setIsActive] = useState(true);
  // eslint-disable-next-line
  function toggle() {
    setIsActive(!isActive);
  }
  let loc = useLocation();

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds + 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    if (loc.pathname === "/bio") {
      setWorld("1-1");
    } else if (loc.pathname === "/skills") {
      setWorld("2-1");
    } else if (loc.pathname === "/projects") {
      setWorld("3-1");
    }
    return () => clearInterval(interval);
  }, [isActive, seconds, loc.pathname]);

  useEffect(() => {}, []);
  return (
    <ScoreBarCom>
      <ScoreGroup>
        <p>Score</p>
        <p>{seconds * 10}</p>
      </ScoreGroup>
      <ScoreGroup>
        <p>World</p>
        <p>{world}</p>
      </ScoreGroup>
      <ScoreGroup>
        <p>Time</p>
        <p>{seconds}</p>
      </ScoreGroup>
    </ScoreBarCom>
  );
};

export default ScoreBar;
