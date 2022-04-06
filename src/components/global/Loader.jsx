import styled, { keyframes } from "styled-components";

const jump = keyframes`
  0% {
    transform: translateY(0);
  }

  40% {
    transform: translateY(-1.2rem);
  }

  60% {
    transform: translateY(0);
  }

  100% {
    transform: translateY(0);
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 3.2rem;
  width: 3rem;
  background-color: transparent;
  margin: auto;

  /* &.cover {
    position: fixed;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    height: 100vh;
  } */

  .dot {
    height: 0.8rem;
    width: 0.8rem;
    background-color: #eb2614;
    border-radius: 50%;
    animation: ${jump} 1.5s ease infinite;

    &:first-child {
      animation-delay: 100ms;
    }

    &:nth-child(2) {
      animation-delay: 300ms;
    }

    &:last-child {
      animation-delay: 500ms;
    }
  }
`;

const Loader = ({ className }) => {
  return (
    <Wrapper className={className}>
      <span className="dot"></span>
      <span className="dot"></span>
      <span className="dot"></span>
    </Wrapper>
  );
};

export default Loader;
