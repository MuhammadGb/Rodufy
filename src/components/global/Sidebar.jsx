import { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Spacer from "./Spacer";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import rodufyIcon from "../../assets/icons/rodufyIcon.svg";
import bigLine from "../../assets/icons/bigLine.svg";
import biggerLine from "../../assets/icons/biggerLine.svg";
import biggestLine from "../../assets/icons/biggestLine.svg";

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  z-index: 5;
  background: var(--primary);
  .innerSide {
    height: 100%;
    width: 100%;
  }
  .lineImg {
    height: 468.26px;
  }
  span {
    img {
      width: 100%;
      height: 100%;
    }
  }
  @media screen and (max-width: 768px) {
    .nospacer {
      display: none;
    }
    .innerSide {
      height: 100%;
      width: 100%;
    }
    .rodufyIcon {
      width: 46px;
      height: 46px;
      margin-left: 1rem;
    }
    .lineImg {
      width: 100%;
      height: 330.26px;
    }
    .lineTwo {
      height: 290.26px;
    }
    .lastline {
      width: 100%;
      height: 178.26px;
    }
  }
  @media screen and (max-width: 500px) {
    .nospacer {
      display: none;
    }
    h1 {
      margin-right: 1rem;
    }
    .rodufyIcon {
      width: 26px;
      height: 26px;
    }
    .lineImg {
      height: 168.26px;
    }
    .lastline {
      height: 168.26px;
    }
  }
`;

const Sidebar = () => {
  const [accountId, setAccountId] = useState();

  useEffect(() => {
    setAccountId(1);
  }, []);
  return (
    <Wrapper>
      <div className="innerSide bgPrimary flexColumn justifySpaceBetween">
        {/* <Menu>
          <NavLink
            to="/dashboard/edit-profile"
            className="item flexRow AlignCenter"
          >
            <span className="text normalBold">Edit Profile</span>
          </NavLink>
        </Menu> */}
        <Spacer y={3.1} />
        <Link to="/home">
          <div className="flexRow alignCenter">
            <Spacer className="nospacer" x={2.1} />
            <img className="rodufyIcon" src={rodufyIcon} alt="rodufyIcon" />
            <Spacer x={1} />
            <h1 className="appLogo lightBold colorWhite">Rodufy</h1>
          </div>
        </Link>
        <Spacer y={9.1} />
        <span className="lineImg">
          <img src={biggestLine} alt="biggestLine" />
        </span>
        <span className="lineTwo lineImg">
          <img src={biggerLine} alt="biggerLine" />
        </span>
        <span className="lastline">
          <img src={bigLine} alt="bigLine" />
        </span>
      </div>
    </Wrapper>
  );
};

export default Sidebar;
