export const createProject = project => {
  console.log("In create project");
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // make async call to database
    const firestore = getFirestore();
    const {
      firstName: authorFirstName,
      lastName: authorLastName
    } = getState().firebase.profile;
    const { uid: authorId } = getState().firebase.auth;
    firestore
      .collection("projects")
      .add({
        ...project,
        authorFirstName,
        authorLastName,
        authorId,
        createdAt: new Date()
      })
      .then(() => {
        dispatch({ type: "CREATE_PROJECT", project });
      })
      .catch(err => {
        dispatch({ type: "CREATE_PROJECT_ERROR", err });
      });
  };
};
