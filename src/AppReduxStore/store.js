import { createStore, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk';
import { rootReducer } from "../AppReduxStore/reducers";

export const store = createStore(rootReducer, applyMiddleware(thunk));
  