const initState = { authError: null };

export default (state = initState, action) => {
  switch (action.type) {
    case "LOGIN_ERROR":
      return {
        ...state,
        authError: "Login failed"
      };
    case "LOGIN_SUCCESS":
      // console.log("login success");
      return { ...state, authError: null };
    case "SIGNOUT_SUCCESS":
      console.log("Signout success");
      return { ...state };
    case "SIGNUP_SUCCESS":
      console.log("Signup success");
      return {
        ...state,
        authError: null
      };
    case "SIGNUP_ERROR":
      console.log("Signup error");
      return {
        ...state,
        authError: action.err.message
      };

    default:
      return state;
  }
};
