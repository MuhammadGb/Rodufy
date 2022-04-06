import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Spacer from "./Spacer";
import Button from "./Button";
import rodufyIcon from "../../assets/icons/rodufyIcon.svg";
//import avartarIcon from "../../assets/images/avartarIcon.png";
import FormGroupCustom from "./FormGroupCustom";
import { useHistory } from "react-router-dom";

const Wrapper = styled.nav`
  top: 0;
  background-color: var(--primary);
  width: 100%;
  height: 9rem;
  //position: fixed;
  .button {
    font-weight: 500;
    font-size: 19px;
    line-height: 42px;
    border-radius: 16px;
    height: 61px;
    width: 209px;
  }
  .btnBorder {
    border: 1px solid #ea7052;
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
      height: 41px;
      width: 129px;
    }
  }
  @media screen and (max-width: 500px) {
    .nospacer {
      display: none;
    }
    .authCover {
      flex-direction: column;
    }
    .rodufyIcon {
      margin-left: 1.5rem;
      width: 2.6rem;
      height: 2.6rem;
    }
    .button {
      font-size: 15px !important;
      line-height: 32px !important;
      height: 31px;
      width: 80px;
      margin-top: 1rem;
      margin-right: 1.5rem;
    }
  }
`;

const Navbar = (props) => {
  const router = useHistory();

  //const [newPost, setNewPost] = useState(false);

  // useEffect(() => {
  // }, []);

  return (
    <Wrapper className="flexRow justifySpaceBetween alignCenter">
      <Link to="/home">
        <div className=" flexRow alignCenter justifyCenter">
          <Spacer className="spacerOne" x={4.1} />
          <img className="rodufyIcon" src={rodufyIcon} alt="rodufyIcon" />
          <Spacer x={1} />
          <h1 className="appLogo lightBold colorWhite">Rodufy</h1>
        </div>
      </Link>
      <div className="authCover flexRow alignCenter justifyCenter">
        <Button
          type="button"
          text="Register"
          bghover="#e65a37"
          bg="#EA7052"
          className="button"
          onClick={() => router.push(`/verify?page=sign_up`)}
        />
        <Spacer x={4} />
        <Button
          type="button"
          text="Login"
          bghover="transparent"
          bg="transparent"
          className="button btnBorder"
          onClick={() => router.push(`/verify?page=sign_in`)}
        />
        <Spacer x={4.1} />
      </div>
    </Wrapper>
  );
};

export default Navbar;
