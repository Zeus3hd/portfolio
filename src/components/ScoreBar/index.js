import React from "react";
import { ScoreBarCom, ScoreGroup } from "./index.style";
const ScoreBar = () => {
  return (
    <ScoreBarCom>
      <ScoreGroup>
        <p>Score</p>
        <p>000000</p>
      </ScoreGroup>
      <ScoreGroup>
        <p>World</p>
        <p>1-1</p>
      </ScoreGroup>
      <ScoreGroup>
        <p>Time</p>
        <p>0000000</p>
      </ScoreGroup>
    </ScoreBarCom>
  );
};

export default ScoreBar;
