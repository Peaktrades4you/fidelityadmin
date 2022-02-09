import { combineReducers } from "redux";
import { Auth } from "./Auth";
import { Users } from "./Users";

export const rootReducer = combineReducers({ users: Users, Auth: Auth });
