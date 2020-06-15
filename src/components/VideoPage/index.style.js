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

const BackLink = styled(Link)`
  text-decoration: none;
  color: ${colors.white};
  font-size: 0.7rem;
  margin: 2rem 0;
  text-align: center;
  width: 100%;
`;

export { Wrapper, BackLink };
