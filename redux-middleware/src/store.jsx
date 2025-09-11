import { applyMiddleware, combineReducers, createStore } from "redux";
import counterReducer from './reducers/counterReducer';
import userReducer from "./reducers/userReducers";
import loggerMiddleware from "./middleware/loggerMiddleware";

const rootReducer = combineReducers({
    counter :counterReducer,
    user : userReducer
})

const store = createStore(rootReducer,applyMiddleware(loggerMiddleware));

export default store;
