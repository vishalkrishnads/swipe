import { combineReducers } from "redux";
import invoicesReducer from "./invoicesReducer";

const rootReducer = combineReducers({
    // we'll just call this manager
    manager: invoicesReducer
});

export default rootReducer;
