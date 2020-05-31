import styled from "styled-components";

const colors = {
  white: "#ffffff",
  red: "#FF0000",
  green: "#05FF00",
};
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const ScoreBar = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  display: flex;
  color: ${colors.white};
  font-size: 0.65rem;
  justify-content: space-between;
  text-align: center;
`;
const ScoreGroup = styled.div``;

const Name = styled.p`
  color: ${colors.red};
  margin: 0;
  font-size: 0.7rem;
  text-align: center;
`;
const BioText = styled.p`
  color: ${colors.white};
  text-align: center;
  font-size: 0.7rem;
  padding: 0 0.5rem;
  box-sizing: border-box;
  line-height: 1.2rem;
`;

const OldManText = styled.p`
  color: ${colors.white};
  font-size: 0.6rem;
  padding: 0 0.5rem;
  box-sizing: border-box;
  text-align: center;
  line-height: 1.1rem;
`;

const OldManImg = styled.img`
  width: 50px;
  margin: 0 auto;
`;
const MonitorIcon = styled.img`
  width: 50px;
  margin: 0 auto;
  animation: glow 5s infinite ease-in-out;

  @keyframes glow {
    0% {
      opacity: 0.3;
    }
    33% {
      opacity: 0.7;
    }
    100% {
      opacity: 1;
    }
  }
`;

const SkillsLink = styled.a`
  font-size: 0.6rem;
  text-align: center;
  color: ${colors.white};
  text-decoration: none;
  transition: 0.4s;
  > * {
    font-size: 1rem;
  }
  &:hover {
    color: ${colors.green};
  }
`;
export {
  MonitorIcon,
  OldManImg,
  OldManText,
  Wrapper,
  ScoreBar,
  ScoreGroup,
  Name,
  BioText,
  SkillsLink,
};
