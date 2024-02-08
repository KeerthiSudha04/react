// reducers/index.ts
import { combineReducers } from "redux";
import dataReducers from "./dataReducers"
const rootReducer = combineReducers({
  async: dataReducers,
});

export default rootReducer;
