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
    text-decoration: none;
  }
`;

export { Wrapper };
