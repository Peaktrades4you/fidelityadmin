import { combineReducers } from "redux";
import { Auth } from "./Auth";
import { Investors } from "./Investors";
import { Users } from "./Users";

export const rootReducer = combineReducers({
  Users: Users,
  Auth: Auth,
  Investors: Investors,
});
