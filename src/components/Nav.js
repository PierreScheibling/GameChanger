import React from "react";
import { useState } from "react";
// Animations
import styled from "styled-components";
import { motion } from "framer-motion";
import logo from "../img/logo.svg";
//Redux and Routes
import { fetchSearch } from "../actions/gamesAction";
import { useDispatch } from "react-redux";
import { fadeIn } from "../animations";

const Nav = () => {
  const dispatch = useDispatch();
  const [textInput, setTextInput] = useState("");

  const inputHandler = (e) => {
    setTextInput(e.target.value);
  };
  const submitSearch = (e) => {
    e.preventDefault();
    dispatch(fetchSearch(textInput));
    setTextInput("");
  };

  const clearSeach = () => {
    dispatch({ type: "CLEAR_SEARCHED" });
  };

  return (
    <StyledNav variants={fadeIn} initial="hidden" animate="show">
      <Logo onClick={clearSeach}>
        <img src={logo} alt="logo" />
        <h1>Game Changer</h1>
      </Logo>
      <form className="search">
        <input value={textInput} onChange={inputHandler} type="text" />
        <button onClick={submitSearch} type="submit">
          Search
        </button>
      </form>
    </StyledNav>
  );
};

const StyledNav = styled(motion.nav)`
  margin-top: clamp(1rem, 4vw, 4rem);
  text-align: center;
  input {
    width: 30%;
    margin-top: clamp(0.2rem, 1vw, 1rem);
    font-size: clamp(0.5rem, 1.5vw, 6rem);
    padding: clamp(0.5rem, 0.5vw, 1rem);
    border: none;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
    border-top-left-radius: 1rem;
    border-bottom-left-radius: 1rem;
  }
  button {
    font-size: clamp(0.5rem, 1.5vw, 6rem);
    border: none;
    padding: clamp(0.5rem, 0.5vw, 1rem) clamp(1rem, 4vw, 2rem);
    cursor: pointer;
    background: #ff7676;
    color: white;
    border-top-right-radius: 1rem;
    border-bottom-right-radius: 1rem;

  }
`;

const Logo = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: clamp(0.5rem, 1vw, 2rem);
  cursor: pointer;
  img {
    margin-right: clamp(0.1rem, 1vw, 2rem);
    height: clamp(2rem, 4vw, 6rem);
    width: clamp(2rem, 4vw, 6rem);
  }
`;

export default Nav;
