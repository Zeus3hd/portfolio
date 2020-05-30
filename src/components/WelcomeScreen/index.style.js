import styled from "styled-components";

const colors = {
  white: "#ffffff",
  red: "#FF0000",
  green: "#05FF00",
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  text-align: center;
  color: ${colors.white};
  line-height: 2rem;
  p {
    margin: 0;
  }
  .second {
    display: flex;
  }
  .red {
    color: ${colors.red};
  }
  .green {
    color: ${colors.green};
  }
`;

const IconsWrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  width: 100%;
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

export { Wrapper, IconsWrapper, IconButton };
