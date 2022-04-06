import styled from "styled-components";
import Spacer from "../global/Spacer";
import Button from "../global/Button";
import cancelIcon from "../../assets/icons/cancelIcon.svg";

const Wrapper = styled.div`
  width: 100%;
  height: 7rem;
  background-color: var(--danger);
  z-index: 1000;
  .midText {
    border-bottom: 2px solid white;
    font-weight: 300;
    font-size: 24px;
    line-height: 31px;
  }
  .button {
    font-weight: 500;
    font-size: 19px;
    line-height: 42px;
    border-radius: 16px;
    background: rgba(255, 255, 255, 0.2);
  }
  .removeIcon {
    width: 2.6rem;
  }
  &.remove {
    display: none;
    pointer-events: none;
  }
  @media screen and (max-width: 768px) {
    //display: none;
    .spacerOne {
      display: none;
    }
    .rodufyIcon {
      margin-left: 2rem;
      width: 3rem;
      height: 3rem;
    }
    .button {
      border-radius: 11px !important;
      height: 36px;
      width: 109px;
    }
    .midText {
      font-size: 20px;
      line-height: 30px;
    }
    .removeIcon {
      width: 2.1rem;
    }
  }
  @media screen and (max-width: 500px) {
    padding: 0rem 0.3rem;
    height: 4rem;
    .button {
      border-radius: 9px;
      height: 26px;
      width: 62px;
      font-size: 12px !important;
      line-height: 32px !important;
    }
    .midText {
      font-size: 12px;
      line-height: 20px;
    }
    .removeIcon {
      width: 1.5rem;
    }
    .nospacer {
      display: none;
    }
  }
`;

const NotifyPopper = () => {
  return (
    <Wrapper
      id={"notifyPopper"}
      className="notifyPopper flexColumn alignSpaceBetween justifyCenter"
    >
      <div className="flexRow alignCenter justifySpaceBetween">
        <Spacer className="nospacer" x={1} />
        <Button
          type="button"
          text="New!"
          height="51px"
          width="159px"
          className="button"
        />
        <span className="midText colorWhite">
          Announcing our $15 million series A funding !
        </span>
        <span
          className="cursorPointer"
          onClick={() => {
            document.querySelector(".notifyPopper").classList.add("remove");
          }}
        >
          <img className="removeIcon" src={cancelIcon} alt="cancelIcon" />
        </span>
        <Spacer className="nospacer" x={1} />
      </div>
    </Wrapper>
  );
};

export default NotifyPopper;
