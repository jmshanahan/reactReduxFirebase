import { combineReducers } from "redux";
import authReducer from "./authReducer";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";

import projectReducer from "./projectReducer";
const rootReducer = combineReducers({
  auth: authReducer,
  project: projectReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer
});
export default rootReducer;
