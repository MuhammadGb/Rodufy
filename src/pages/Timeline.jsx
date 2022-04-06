import { useEffect, useState, useContext } from "react";
import Button from "../components/global/Button";
import TimelineNav from "../components/global/TimelineNav";
import Spacer from "../components/global/Spacer";
import styled from "styled-components";
import Footer from "../components/global/Footer";
import { getPosts, signOut, getUser } from "../apis";
//import avartarFour from "../assets/images/avartarFour.png";
import toggleTop from "../assets/icons/toggleTop.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Loader from "../components/global/Loader";
import { Redirect } from "react-router-dom";
import axios from "axios";

const Wrapper = styled.div`
  .recipeCover {
    position: relative;
  }
  .postImg {
    position: relative;
    border-radius: 16px;
    width: 418px;
    height: 400px;
    img {
      border-radius: 16px;
      width: 100%;
      height: 100%;
    }
  }
  .postText {
    border-radius: 8px;
    position: absolute;
    margin: auto;
    padding: 5%;
    bottom: 1rem;
    max-width: 90%;
    font-weight: 500;
    font-size: 26px;
    line-height: 32px;
    background: rgba(99, 98, 98, 0.5);
  }
  .postItem {
    margin: 0 2rem;
  }
  .trendingItem {
    margin: 3rem;
  }
  .trending {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  .trendingImg {
    position: relative;
    border-radius: 16px;
    width: 558px;
    height: 400px;
    img {
      border-radius: 16px;
      width: 100%;
      height: 100%;
    }
  }
  @media screen and (max-width: 1300px) {
    .postImg {
      width: 340px;
      height: 340px;
    }
    .postText {
      font-size: 20px;
      line-height: 21px;
    }
    .trendingImg {
      width: 400px;
      height: 400px;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  @media screen and (max-width: 768px) {
    .postImg {
      width: 220px;
      height: 220px;
    }
    .postText {
      font-size: 12px;
      line-height: 21px;
    }
    .trendingImg {
      position: relative;
      border-radius: 16px;
      width: 278px;
      height: 278px;
      img {
        border-radius: 16px;
        width: 100%;
        height: 100%;
      }
    }
  }
  @media screen and (max-width: 500px) {
    .postImg {
      width: 112px;
      height: 112px;
    }
    .postText {
      font-size: 8px;
      line-height: 15px;
    }
    .trendingItem {
      margin: 2rem 1rem;
    }
    .trendingImg {
      position: relative;
      border-radius: 16px;
      width: 128px;
      height: 128px;
      img {
        border-radius: 16px;
        width: 100%;
        height: 100%;
      }
    }
  }
`;

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "transparent",
        width: "3rem",
        height: "2rem",
        right: "0.1rem",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "transparent",
        color: "grey",
        width: "3rem",
        height: "2rem",
        left: "0.1rem",
        zIndex: 100,
      }}
      onClick={onClick}
    />
  );
}

const Timeline = (props) => {
  const [postData, setPostData] = useState([]);
  const [trendingData, setTrendingData] = useState([]);
  const [data, setData] = useState([]);
  const [tohidePost, setToHidePost] = useState(true);
  const [toHideTrending, setToHideTrending] = useState(true);
  const [totalItems, setTotalItems] = useState(0);
  const [initial, setInitial] = useState(false);
  const [loading, setLoading] = useState(false);
  const [footer, setFooter] = useState(false);

  const signOutUser = async () => {
    const res = await signOut();
  };
  const getCurrentUser = async () => {
    const res = await getUser();
  };
  const userNewsFeed = async () => {
    setInitial(true);
    const res = await getPosts();
    setTrendingData(res.data.slice(0, 10));
    let selected = res.data.slice(13, 19);
    setPostData(selected);
    setTotalItems(res.data.length);
    setInitial(false);
  };

  const moreFeeds = async () => {
    setLoading(true);
    window.removeEventListener("scroll", handleScroll);
    const res = await getPosts();
    setTrendingData((prevState) => [...prevState, ...res.data.slice(10, 20)]);
    setLoading(false);
    setFooter(true);
  };
  const handleScroll = () => {
    if (
      window.innerHeight + window.scrollY >=
        document.documentElement.offsetHeight &&
      trendingData.length !== totalItems
    ) {
      moreFeeds();
      return;
    }
  };

  useEffect(() => {
    signOutUser();
    userNewsFeed();
    getCurrentUser();
  }, []);

  useEffect(() => {
    if (trendingData.length === totalItems) {
      return false;
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [totalItems]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    appendDots: (dots) => (
      <div
        style={{
          padding: "0px",
        }}
      >
        <ul style={{ margin: "-8px" }}> {dots} </ul>
      </div>
    ),
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <Wrapper className="bgGray flexColumn">
      <TimelineNav />
      {initial && <Loader className="loading" />}
      <Spacer y={2} />
      {!initial && (
        <div>
          <span className="flexRow alignCenter">
            <img
              src={toggleTop}
              alt="toggleIcon"
              onClick={() => setToHidePost(!tohidePost)}
            />
            <Spacer x={1} />
            <h2>Top Post</h2>
          </span>
          {/* <span className="topPost flexRow"> */}
          {tohidePost && (
            <Slider {...settings}>
              {postData.map((post, index) => (
                <div key={index} className="postItem">
                  <div className="postImg flexRow justifyCenter cursorPointer">
                    <img src={post.metaImageUrl} alt="posts" />
                    <span className="postText colorWhite">
                      {post.description.length > 45
                        ? `${post.description.substring(0, 45)}...`
                        : post.description}
                    </span>
                  </div>
                </div>
              ))}
            </Slider>
          )}
          {/* </span> */}
        </div>
      )}
      <Spacer y={3} />
      {!initial && (
        <div>
          <span className="flexRow alignCenter">
            <img
              src={toggleTop}
              alt="toggleIcon"
              className="cursorPointer"
              onClick={() => setToHideTrending(!toHideTrending)}
            />
            <Spacer x={1} />
            <h2>Trending</h2>
          </span>
          {toHideTrending && (
            <div className="trending alignCenter justifyCenter">
              {trendingData.map((post, index) => (
                <div key={index} className="trendingItem">
                  <div className="trendingImg flexColumn alignCenter cursorPointer">
                    <img src={post.metaImageUrl} alt="posts" />
                    <span className="postText colorWhite">
                      {post.description.length > 60
                        ? `${post.description.substring(0, 60)}...`
                        : post.description}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
      {loading ? <Loader /> : ""}
      {footer ? <Footer /> : ""}
    </Wrapper>
  );
};

export default Timeline;
