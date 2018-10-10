export const createProject = project => {
  console.log("In create project");
  return (dispatch, getState) => {
    // make async call to database
    dispatch({ type: "CREATE_PROJECT", project });
  };
};
