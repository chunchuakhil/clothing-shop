import { SET_CURRENT_USER } from "./user-actionTypes";
const INITIAL_STATE = {
  currentUser: null,
};
const userReducer = (state = INITIAL_STATE, action) => {
  console.log("hello");
  switch (action.type) {
    case SET_CURRENT_USER: {
      console.log("SET_CURRENT_USER");

      return {
        ...state,
        currentUser: action.payload,
      };
    }

    default:
      return state;
  }
};
export default userReducer;
