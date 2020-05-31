import styled from "styled-components";

const Wrapper = styled.div`
  background: url(${({ bg }) => bg}),
    radial-gradient(
        538.66% 174.81% at 49.87% 49.93%,
        #151414 17.19%,
        #dcdcdc 100%
      )
      no-repeat;
  background-size: cover;
  background-position: center;
  background-blend-mode: overlay;
`;

export { Wrapper };
