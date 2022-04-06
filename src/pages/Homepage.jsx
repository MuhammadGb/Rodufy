import { useEffect, useState } from "react";
import Button from "../components/global/Button";
import Navbar from "../components/global/Navbar";
import Footer from "../components/global/Footer";
import Spacer from "../components/global/Spacer";
import NotifyPopper from "../components/other/NotifyPopper";
import styled from "styled-components";
import { getPosts } from "../apis";
import childImg from "../assets/images/childImg.png";
import busPeople from "../assets/images/busPeople.png";
import googlePlay from "../assets/images/googlePlay.png";
import appStore from "../assets/images/appStore.png";
import contactusImg from "../assets/icons/contactusImg.svg";
import emailIcon from "../assets/icons/emailIcon.svg";
import whatsappIcon from "../assets/icons/whatsappIcon.svg";
import { Redirect } from "react-router-dom";
import axios from "axios";

const Wrapper = styled.div`
  .recipeCover {
    position: relative;
  }
  .sectionOne {
    margin: 0 2.5rem;
  }
  .sideOne {
    margin: 0rem 6rem 0rem 3rem;
    width: 40%;
  }
  .downloadApp {
    padding: 0.5rem;
    width: 162px;
    height: 72px;
    border-radius: 16px;
    img {
      height: 100%;
    }
  }
  .sectionTwo {
    padding: 0 3rem;
    .subSection {
      margin: 3rem 8rem 3rem 2rem;
    }
  }
  .sectionThree {
    padding: 0rem;
    .subSection {
      margin: 3rem 3rem 0rem 6rem;
    }
  }
  .txtInner {
    border-bottom: 4px solid white;
  }
  .button {
    font-weight: 500;
    font-size: 26px;
    line-height: 42px;
    border-radius: 16px;
  }
  .emailIcon {
    border: 12px solid gray;
    border-radius: 8px;
    height: 3.2rem;
    img {
      width: 100%;
      height: 100%;
    }
  }
  @media screen and (max-width: 768px) {
    //display: none;
    .recipeCover {
      top: -0.1rem;
    }
    .spacer {
      display: none;
    }
    .sectionOne {
      margin: 0rem 0.6rem 0rem 0rem;
    }
    .sideOne {
      margin: 0rem 1rem 0rem 2rem;
      width: 42%;
      span {
        margin: 1rem 0;
      }
    }
    .childCover {
      width: 26rem;
      height: 22rem;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .downloadApp {
      padding: 0.5rem;
      width: 162px;
      height: 46px;
      border-radius: 16px;
      img {
        height: 100%;
      }
    }
    .sectionTwo {
      padding: 0 2rem;
      .subSection {
        width: 55%;
        margin: 0rem 0rem 3rem 0rem;
        span {
          margin: 1.1rem 0;
        }
        .button {
          margin: 1.8rem 0;
          font-size: 26px;
          line-height: 42px;
          border-radius: 11px;
        }
      }
      .subImage {
        width: 60%;
        img {
          width: 100%;
        }
      }
    }
    .sectionThree {
      margin: 0rem 0rem 1rem;
      .subSection {
        width: 70%;
        margin: 0rem 2rem;
      }
      .contactHead {
        margin: 0rem 0rem 2rem;
      }
    }
    .contactusImg {
      width: 90%;
      height: 25rem;
      margin: 0.5rem 0rem;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .emailIcon {
      height: 2.5rem;
    }
    .iconCover {
      height: 2.1rem;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  @media screen and (max-width: 500px) {
    .nospacer {
      display: none;
    }
    .sectionOne {
      flex-direction: column;
      align-items: center;
    }
    .sideOne {
      width: 98%;
      margin-left: 3.2rem;
    }
    .childCover {
      width: 98%;
      height: 18rem;
      margin-left: 0.5rem;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .downloadCover {
      position: relative;
      left: -0.5rem;
    }
    .downloadApp {
      width: 92px;
      height: 46px;
      border-radius: 10px;
      img {
        height: 100%;
      }
    }
    .subAreaTwo {
      flex-direction: column;
      align-items: center;
      margin-top: 2rem;
      .subSection {
        width: 98%;
        margin: 0rem 0rem 3rem 0rem;
        span {
          margin: 0.5rem 0;
        }
        .button {
          margin: 1.8rem 0 0;
          font-size: 22px;
          line-height: 32px;
        }
      }
      .subImage {
        width: 100%;
        margin-left: 1rem;
        img {
          width: 100%;
        }
      }
    }
    .subThree {
      flex-direction: column;
      align-items: center;
      margin-top: 0rem;
      .subSection {
        width: 90%;
      }
      .contactHead {
        margin: 0rem 0rem 1rem;
      }
    }
    .iconCover {
      height: 2.5rem;
    }
    .contactusImg {
      margin-top: -4rem;
      margin-bottom: -4rem;
      width: 98%;
    }
  }
`;

const Homepage = (props) => {
  return (
    <Wrapper className="flexColumn">
      <NotifyPopper />
      <Navbar />
      <div className="bgPrimary recipeCover">
        <Spacer y={2} />
        <div className="sectionOne flexRow justifyCenter">
          <span className="sideOne flexColumn colorWhite">
            <span className="bodyBolder normalBold">
              Our mission is to{" "}
              <span className="txtInner colorDanger">advance</span> humanity
            </span>
            <Spacer className="spacer" y={4} />
            <span className="bodySmall">
              We would strive to achieve that through providing education and
              quality health
            </span>
            <Spacer className="spacer" y={4} />
            <span className="downloadCover flexRow alignCenter">
              <span className="commentsBody">DOWNLOAD APP</span>
              <Spacer className="nospacer" x={3} />
              <span className="bgWhite downloadApp flexRow alignCenter justifyCenter">
                <img src={googlePlay} alt="childImage" />
              </span>
              <Spacer x={1} />
              <span className="bgWhite downloadApp flexRow alignCenter justifyCenter">
                <img src={appStore} alt="childImage" />
              </span>
            </span>
          </span>
          <span className="childCover">
            <img src={childImg} alt="childImage" />
          </span>
        </div>
        <Spacer y={4} />
      </div>
      <div className="bgWhite sectionTwo">
        <Spacer y={4} className="nospacer" />
        <div className="subAreaTwo flexRow justifyCenter">
          <span className="flexColumn subSection colorBlack">
            <span className="bodyBolder normalBold">
              Everything you’ll need to{" "}
              <span className="colorDanger">excel</span> in life
            </span>
            <Spacer className="spacer" y={4} />
            <span className="bodySmall">
              We’ve curated a list of valuable resources to get you going in
              life, all for free!
            </span>
            <Spacer className="spacer" y={4} />
            <Button
              type="button"
              text="Get Started"
              height="81px"
              //width="509px"
              bghover="#e65a37"
              bg="#e65a37"
              className="button"
              fullWidth
            />
          </span>
          <Spacer x={5} />
          <span className="subImage">
            <img src={busPeople} alt="busPeople" />
          </span>
        </div>
        <Spacer y={4} />
      </div>
      <div className="bgGray sectionThree">
        <Spacer y={2} />
        <div className="subThree flexRow justifySpaceBetween">
          <span className="flexColumn subSection colorBlack">
            <span className="contactHead bodyBolder normalBold">
              Contact Us
            </span>
            <Spacer className="spacer" y={2} />
            <span className="bodySmall">
              Got any questions, feedback, request and complains? Reach out...
            </span>
            <Spacer y={2} />
            <span className="flexRow alignCenter">
              <span className="iconCover">
                <img src={whatsappIcon} alt="whatsappIcon" />
              </span>
              <Spacer x={1.2} />
              <span className="lightBold bodySmall">+2348232323892</span>
            </span>
            <Spacer y={2} />
            <span className="flexRow alignCenter">
              <span className="emailIcon">
                <img src={emailIcon} alt="emailIcon" />
              </span>
              <Spacer x={1.2} />
              <span className="lightBold bodySmall">contact@us.com</span>
            </span>
          </span>
          <Spacer x={5} />
          <span className="contactusImg">
            <img src={contactusImg} alt="childImage" />
          </span>
        </div>
        <Spacer className="spacer" y={7} />
      </div>
      <Footer />
    </Wrapper>
  );
};

export default Homepage;
