import React from "react";
import {
  Wrapper,
  ScoreBar,
  ScoreGroup,
  Name,
  BioText,
  OldManText,
  OldManImg,
  MonitorIcon,
  SkillsLink,
} from "./index.style";
import oldMan from "../../imgs/oldman.png";
import monitorImg from "../../imgs/codeinmonitor.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";

const Bio = () => {
  return (
    <Wrapper>
      <ScoreBar>
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
      </ScoreBar>
      <Name>Player: Ahd Hani Radwan</Name>
      <BioText>
        Passionate Software Developer Curios, and always on the lookout for new
        technologies to learn and play with.
      </BioText>
      <OldManText>IT’S DANGEROUS TO GO ALONE! tAKE THIS..</OldManText>
      <OldManImg src={oldMan} alt="Old Man" />
      <MonitorIcon src={monitorImg} alt="Monitor" />
      <SkillsLink href="#deadsies">
        <FontAwesomeIcon icon={faCaretRight} /> Click Here To Begin The
        Adventure
      </SkillsLink>
    </Wrapper>
  );
};

export default Bio;
