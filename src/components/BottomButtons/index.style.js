import styled from "styled-components";
const colors = {
  white: "#ffffff",
  red: "#FF0000",
  green: "#05FF00",
};
const IconsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 500px;
`;
const IconButton = styled.button`
  background: transparent;
  border: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  svg {
    fill: ${colors.white};
    width: 30px;
  }
  > p {
    color: ${colors.white};
    font-family: "Press Start 2p";
    padding: 0.5rem 0;
    font-size: 0.6rem;
  }
`;

export { IconsWrapper, IconButton };
