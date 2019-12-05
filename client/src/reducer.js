import axios from "axios";
import { loginUser, registerUser } from "./actions/user_actions";
// Import

// Actions

// Action Creators

// Reducer

const reducer = (state = {}, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, loginSuccess: action.payload };
    case REGISTER_USER:
      return { ...state, loginSuccess: action.payload };
    default:
      return state;
  }
};
// Reducer Functions

// Export Action Creators

// Export Reducer
export default reducer;
