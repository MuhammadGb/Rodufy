import Spacer from "../components/global/Spacer";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;

  .prompt {
    font-size: 24px;
    line-height: 36px;
    text-transform: capitalize;
  }
`;

export default function PageNotFound() {
  return (
    <Wrapper>
      <p className="prompt">
        <span>404 | Page not found.</span>
      </p>
      {/* <Spacer x={1.2} />
      <a href="/" className="colorSecondary">
        Go to dashboard
      </a> */}
    </Wrapper>
  );
}
