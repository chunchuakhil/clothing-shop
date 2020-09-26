import { SET_CURRENT_USER } from "./user-actionTypes";
export const setCurrentUser = (user) => {
  console.log("setCurrentUser -> user", user);

  return {
    type: SET_CURRENT_USER,
    payload: user,
  };
};
