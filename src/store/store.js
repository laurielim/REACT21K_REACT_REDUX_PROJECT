import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rocksReducer from "./reducers/rocksReducer";
import basketReducer from "./reducers/basketReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
	rocks: rocksReducer,
	basket: basketReducer,
});

const store = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(thunk))
);

export default store;
