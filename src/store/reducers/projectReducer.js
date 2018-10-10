const initState = {
  projects: [
    { id: "1", title: "Help me find peach", content: "blah blah blak" },
    { id: "2", title: "Collect the start", content: "blah blah blak" },
    { id: "3", title: "egg hunt", content: "blah blah blak" }
  ]
};

const projectReducer = (state = initState, action) => {
  if (action) {
    console.log(action.type);
  }
  switch (action.type) {
    case "CREATE_PROJECT":
      console.log("created project l", action.project);
      return state;
    case "CREATE_PROJECT_ERROR":
      console.log("create project error", action.err);
      return state;
    default:
      return state;
  }
};
export default projectReducer;
