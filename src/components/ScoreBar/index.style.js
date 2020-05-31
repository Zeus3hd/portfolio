import styled from "styled-components";

const colors = {
  white: "#ffffff",
  red: "#FF0000",
  green: "#05FF00",
};

const ScoreBarCom = styled.div`
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

export { ScoreBarCom, ScoreGroup };
