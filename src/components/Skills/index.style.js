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
  height: 100%;
`;

const HeadLine = styled.h2`
  color: ${colors.green};
  font-size: 0.7rem;
  padding: 0 0.4rem;
  box-sizing: border-box;
  letter-spacing: 0.15rem;
  line-height: 1.2rem;
`;
const ListWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
const List = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0 0.5rem;
`;
const ListItem = styled.li`
  position: relative;
  padding-left: 1.3rem;
  color: ${colors.white};
  font-size: 0.6rem;
  line-height: 1.1rem;
  &:before {
    content: "- ";
    position: absolute;
    left: 0;
  }
`;

const ProjectsLink = styled(Link)`
  font-size: 0.7rem;
  text-align: center;
  margin: 1.5rem 0;
  color: ${colors.yellow};
  text-decoration: none;
`;

const BackLink = styled(Link)`
  font-size: 0.7rem;
  text-align: center;
  margin: 1.5rem 0;
  color: ${colors.white};
  text-decoration: none;
`;

export {
  BackLink,
  ProjectsLink,
  Wrapper,
  HeadLine,
  ListWrapper,
  List,
  ListItem,
};
