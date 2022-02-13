import { combineReducers } from "redux";
import { Auth } from "./Auth";
import { ChangePassword } from "./ChangePassword";
import { Investors } from "./Investors";
import { Profile } from "./Profile";
import { Users } from "./Users";

export const rootReducer = combineReducers({
  Users: Users,
  Auth: Auth,
  Investors: Investors,
  Profile: Profile,
  ChangePassword: ChangePassword,
});
