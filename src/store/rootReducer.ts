import { combineReducers } from "@reduxjs/toolkit";

import global from "./global";

const rootReducer = combineReducers({
  global,
});

export default rootReducer;
