import { applyMiddleware, combineReducers,compose, legacy_createStore } from "redux"
import { reducer as BmiReducer } from "./BmiReducer/reducer"
import {reducer as AuthReducer } from "./AuthReducer/reducer"
 import thunk from "redux-thunk"

const rootReducer = combineReducers({
     AuthReducer,
     BmiReducer,
}); 

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;



const store = legacy_createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));


export default store;