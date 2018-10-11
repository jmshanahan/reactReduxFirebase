import { combineReducers } from "redux";
import authReducer from "./authReducer";
import { firestoreReducer } from "redux-firestore";
import projectReducer from "./projectReducer";
const rootReducer = combineReducers({
  auth: authReducer,
  project: projectReducer,
  firestore: firestoreReducer
});
export default rootReducer;
