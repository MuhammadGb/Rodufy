import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Spacer from "./Spacer";
import Button from "./Button";
import rodufyIcon from "../../assets/icons/rodufyIcon.svg";
//import avartarIcon from "../../assets/images/avartarIcon.png";
import { AccessState } from "../../App";
import { useHistory } from "react-router-dom";

const Wrapper = styled.nav`
  top: 0;
  background-color: var(--primary);
  width: 100%;
  height: 11rem;
  //position: fixed;
  .button {
    font-weight: 500;
    font-size: 25px;
    line-height: 42px;
    border-radius: 16px;
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
      font-size: 21px;
      line-height: 32px;
    } /* */
  }
  @media screen and (max-width: 500px) {
    padding-right: 0.6rem;
    .rodufyIcon {
      margin-left: 1.5rem;
      width: 2.6rem;
      height: 2.6rem;
    }
  }
`;

const TimelineNav = (props) => {
  const router = useHistory();
  const [email, setEmail] = useState("");
  const { logged_in, setLogged_in } = useContext(AccessState);

  const displayName = email.indexOf("@") !== -1 ? email.split("@")[0] : "user";

  useEffect(() => {
    if (sessionStorage.email && sessionStorage.email !== "") {
      setEmail(sessionStorage.getItem("email"));
    }
  }, []);

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
      <div className="flexRow alignCenter">
        <div className=" flexColumn justifyCenter">
          <h1 className="lightBold colorWhite">Hi ${displayName}</h1>
          <Button
            type="button"
            text="Logout"
            height="51px"
            width="169px"
            bghover="#e65a37"
            bg="#EA7052"
            className="button"
            onClick={() => {
              //router.push(`/home`);
              setLogged_in(false);
            }}
          />
        </div>
        <Spacer className="spacerOne" x={6} />
      </div>
    </Wrapper>
  );
};

export default TimelineNav;
