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
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const Green = styled.p`
  color: ${colors.green};
  text-align: center;
  font-size: 0.7rem;
  line-height: 1.3rem;
`;
const White = styled.p`
  color: ${colors.white};
  text-align: center;
  font-size: 0.7rem;
  line-height: 1.3rem;
`;

const ProjectImg = styled.a`
  background: url(${({ bg }) => bg}) no-repeat;
  background-position: center;
  height: 70vw;
  width: 70vw;
  max-width: 400px;
  max-height: 400px;
  background-size: contain;
`;

const TechsList = styled.ul`
  text-align: left;
  margin: 0;
  padding: 0;
  font-size: 0.6rem;
  color: ${colors.white};
  list-style-type: none;
  line-height: 1.3rem;
  width: 90%;
`;
const ListItem = styled.li`
  position: relative;
  &::before {
    content: "- ";
  }
`;
const BackLink = styled(Link)`
  text-decoration: none;
  color: ${colors.white};
  font-size: 0.7rem;
  margin: 2rem 0;
`;

const ProjectLink = styled.a`
  text-decoration: none;
  color: ${colors.white};
  font-size: 0.6rem;
  position: relative;
  padding: 0 0.7rem;
  &:hover {
    color: ${colors.green};
    cursor: pointer;
    &::before {
      content: "- ";
      position: absolute;
      left: 0;
    }
  }
`;

const ProjectLinkVideo = styled(Link)`
  text-decoration: none;
  color: ${colors.white};
  font-size: 0.6rem;
  position: relative;
  padding: 0 0.7rem;
  &:hover {
    color: ${colors.green};
    cursor: pointer;
    &::before {
      content: "- ";
      position: absolute;
      left: 0;
    }
  }
`;
const ProjectLinkContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  margin-top: 1.5rem;
`;
export {
  ProjectLink,
  Wrapper,
  Green,
  ProjectImg,
  White,
  TechsList,
  ListItem,
  BackLink,
  ProjectLinkContainer,
  ProjectLinkVideo,
};
