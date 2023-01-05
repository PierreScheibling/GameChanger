import React from "react";
// Styling and Animations
import styled from "styled-components";
import { motion } from "framer-motion";
//Redux
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { smallImage } from "../util";
//Images
import playstation from "../img/playstation.svg";
import steam from "../img/steam.svg";
import xbox from "../img/xbox.svg";
import nintendo from "../img/nintendo.svg";
import apple from "../img/apple.svg";
import gamepad from "../img/gamepad.svg";
//Star Images
import starEmpty from "../img/star-empty.png";
import starFull from "../img/star-full.png";

const GameDetail = ({ pathId }) => {
  const navigate = useNavigate();
  //Exit Detail
  const exitDetailHandler = (e) => {
    const element = e.target;
    if (element.classList.contains("shadow")) {
      document.body.style.overflow = "auto";
      navigate("/");
    }
  };

  //Get stars
  const getStars = () => {
    const stars = [];
    const rating = Math.floor(game.rating);
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<img alt="star" key={i} src={starFull}></img>);
      } else {
        stars.push(<img alt="star" key={i} src={starEmpty}></img>);
      }
    }
    return stars;
  };

  //Get Platforms Images
  const getPlateform = (platform) => {
    switch (platform) {
      case "Playstation 4":
        return playstation;
      case "Playstation 5":
        return playstation;
      case "PS5":
        return playstation;
      case "Xbox One":
        return xbox;
      case "PC":
        return steam;
      case "Nintendo Switch":
        return nintendo;
      case "iOS":
        return apple;
      default:
        return gamepad;
    }
  };

  const picture = {
    hidden: { scale: 1.1 },
    show: { scale: 1, transition: { duration: 1, ease: "easeOut", delay: 1 } },
  };

  //Data
  const { screen, game, isLoading } = useSelector((state) => state.detail);
  return (
    <>
      {!isLoading && (
        <CardShadow layout className="shadow" onClick={exitDetailHandler}>
          <Detail layoutId={pathId} layout transition={{ duration: 0.5 }}>
            <Stats>
              <GameTitle>
                <motion.h2 layoutId={`title ${pathId}`}>{game.name}</motion.h2>
              </GameTitle>
              <Info>
                <Rating>
                <h3>Rating: {game.rating}</h3>
                <div>{getStars()}</div>
                </Rating>
                <Platforms>
                <h3>Platforms</h3>
                <div>
                  {game.platforms?.map((data) => (
                    <img
                      key={data.platform.id}
                      src={getPlateform(data.platform.name)}
                    ></img>
                  ))}
                  </div>
                </Platforms>
              </Info>
            </Stats>
            <Media layout transition={{ duration: 0.5 }}>
              <motion.img
                layoutId={`image ${pathId}`}
                src={smallImage(game.background_image, 1280)}
                alt="image"
              />
            </Media>
            <Description>
              <p>{game.description_raw}</p>
            </Description>
            <Gallery>
              {screen.results?.map((screen) => (
                <img
                  src={smallImage(screen.image, 1280)}
                  key={screen.id}
                  alt={screen.image}
                />
              ))}
            </Gallery>
          </Detail>
        </CardShadow>
      )}
    </>
  );
};

const CardShadow = styled(motion.div)`
  z-index: 10;
  width: 100%;
  min-height: 100%;
  overflow-y: scroll;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  &::-webkit-scrollbar {
    width: 0.5rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #ff7676;
  }
  &::-webkit-scrollbar-track {
    background: white;
  }
`;

const GameTitle = styled(motion.div)`
h2 {
  margin: 0rem;
  padding: 2rem;
}
`;

const Detail = styled(motion.div)`
  overflow: hidden;
  z-index: 10;
  width: 90%;
  border-radius: 1rem;
  padding: 0rem 5rem;
  background: white;
  position: absolute;
  left: 5%;
  top: 5%;
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  img {
    width: 100%;
  }
`;


const Rating = styled(motion.div)`
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: center;
img {
  margin: 0rem 0.2rem;
    width: 2rem;
    height: 2rem;
    display: inline;
}
`;

const Stats = styled(motion.div)`
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  img {
    width: 2rem;
    height: 2rem;
    display: inline;
  }
`;

const Info = styled(motion.div)`
  z-index: 10;
  text-align: center;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
`;

const Platforms = styled(motion.div)`
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  img {
    margin: 0rem 0.2rem;
    width: 2rem;
    height: 2rem;
    display: inline;
  }
`;

const Media = styled(motion.div)`
  z-index: 10;
  margin-top: 1rem;
  img {
    width: 100%;
    height: 60vh;
    object-fit: cover;
  }
`;

const Description = styled(motion.div)`
  z-index: 10;
  margin: 3rem 0rem;
  text-align: justify;
`;

const Gallery = styled(motion.div)`
display: grid;
grid-template-columns: repeat(3, 1fr);
grid-gap: 1rem;
margin-bottom: 2rem;
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
`;



export default GameDetail;
