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
    default:
      return state;
  }
};
