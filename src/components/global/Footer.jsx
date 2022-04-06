import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Spacer from "./Spacer";
import rodufyIcon from "../../assets/icons/rodufyIcon.svg";
//import avartarIcon from "../../assets/images/avartarIcon.png";
import { useHistory } from "react-router-dom";

const Wrapper = styled.nav`
  top: 0;
  background-color: var(--primary);
  width: 100%;
  @media screen and (max-width: 768px) {
    padding-top: 2rem;
    .rodufyIcon {
      margin-left: 3rem;
      width: 3rem;
      height: 3rem;
    }
  }
  @media screen and (max-width: 500px) {
    padding-top: 2rem;
    .rodufyIcon {
      margin-left: 1rem;
      width: 2rem;
      height: 2rem;
    }
    .footerLinks {
      flex-wrap: wrap;
      margin: 0 2rem;
      h5 {
        font-size: 1.5rem;
      }
    }
  }
`;

const Footer = (props) => {
  const router = useHistory();

  //const [newPost, setNewPost] = useState(false);

  // useEffect(() => {
  // }, []);

  return (
    <Wrapper className="flexColumn justifyCenter alignSpaceBetween">
      <Spacer className="spacer" y={4} />
      <Link to="/home">
        <div className="flexRow alignCenter">
          <Spacer className="spacer" x={9} />
          <img className="rodufyIcon" src={rodufyIcon} alt="rodufyIcon" />
          <Spacer x={1} />
          <h1 className="appLogo lightBold colorWhite">Rodufy</h1>
        </div>
      </Link>
      <div className="footerLinks flexRow colorWhite alignCenter justifySpaceBetween">
        <Spacer className="nospacer" x={1} />
        <Link to="/blog">
          <h5 className="appLogo lightBold colorWhite">Blog</h5>
        </Link>
        <Link to="/privacy_policy">
          <h5 className="appLogo lightBold colorWhite">Privacy Policy</h5>
        </Link>
        <Link to="/about">
          <h5 className="appLogo lightBold colorWhite">About</h5>
        </Link>
        <Link to="/contact">
          <h5 className="appLogo lightBold colorWhite">Contact</h5>
        </Link>
        <Spacer className="nospacer" x={1} />
      </div>
      <div className=" flexRow alignCenter justifyCenter">
        <p className="lightBold footerSmall colorWhite">
          copyright Rodufy 2022
        </p>
      </div>
    </Wrapper>
  );
};

export default Footer;
