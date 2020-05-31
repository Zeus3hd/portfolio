import styled from "styled-components";
import { Link } from "react-router-dom";
const colors = {
  white: "#ffffff",
  red: "#FF0000",
  green: "#05FF00",
  yellow: "#FFF500",
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  text-align: center;
`;

const ProjectLink = styled(Link)`
  text-decoration: none;
  font-size: 0.65rem;
  color: ${colors.white};
  &:hover > * {
    color: ${colors.green};
  }
`;
const ProjectTitle = styled.p`
  color: ${colors.yellow};
  transition: 0.4s;
`;
const ProjectDesc = styled.p`
  transition: 0.4s;
`;

const BackLink = styled(Link)`
  text-decoration: none;
  color: ${colors.white};
  font-size: 0.7rem;
  margin: 2rem 0;
`;

export { BackLink, Wrapper, ProjectLink, ProjectTitle, ProjectDesc };
