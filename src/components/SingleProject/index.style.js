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
`;
const White = styled.p`
  color: ${colors.white};
  text-align: center;
  font-size: 0.7rem;
`;

const ProjectImg = styled.div`
  background: url(${({ bg }) => bg});
  height: 70vw;
  width: 70vw;
  max-width: 400px;
  max-height: 400px;
  background-size: cover;
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
export { Wrapper, Green, ProjectImg, White, TechsList, ListItem, BackLink };
