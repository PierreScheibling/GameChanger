import React from "react";
// Styling and Animations
import styled from "styled-components";
import { motion } from "framer-motion";
//Redux
import { useDispatch } from "react-redux";
import { loadDetail } from "../actions/detailAction";
import { Link } from "react-router-dom";
import { smallImage } from "../util.js";
import { popup } from "../animations";

const Game = ({ name, released, image, id }) => {
  const stringPathId = id.toString();
  const dispatch = useDispatch();
  const loadDetailHandler = () => {
    dispatch(loadDetail(id));
  };
  return (
    <StyledGame variants={popup} initial='hidden' animate="show" layoutId={id} onClick={loadDetailHandler}>
      <Link to={`/game/${id}`}>
        <Card>
        <Description>
          <motion.h3 layoutId={`title ${stringPathId}`}>{name}</motion.h3>
          <p>{released}</p>
        </Description>
        <Image>
          <motion.img src={smallImage(image,640)} alt={name} />
        </Image>
        </Card>
      </Link>
    </StyledGame>
  );
};

const StyledGame = styled(motion.div)`
  height: clamp(17rem, 30vw, 30rem);
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 1rem;
  cursor: pointer;
  overflow: hidden;
:hover{
    box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.5);
  }
`;
const Card = styled(motion.div)`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Description = styled(motion.div)`
  width: 100%;
  height: 30%;
  display: flex;
  flex-direction: column;
`;

const Image = styled(motion.div)`
  width: 100%;
  height: 70%;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;

export default Game;
