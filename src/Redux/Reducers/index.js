import { combineReducers } from "redux";
import { Users } from "./Users";

export const rootReducer = combineReducers({ users: Users });
