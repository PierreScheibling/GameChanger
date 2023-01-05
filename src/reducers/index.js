import { combineReducers } from "@reduxjs/toolkit";
import gamesReducer from "./gamesReducers";
import detailReducer from "./detailReducers";

const rootReducer = combineReducers({
  games: gamesReducer,
  detail: detailReducer,
})

export default rootReducer;
