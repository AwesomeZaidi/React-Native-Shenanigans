// src/redux/store/index.js

import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../reducers";
import thunk from "redux-thunk";

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const DIGITAL_MENU_STATE = "DIGITAL_MENU_STATE";

// Load State 
export const loadState = async () => {
  try {
    const serializedState = await AsyncStorage.getItem(DIGITAL_MENU_STATE)
    if (serializedState === null) {
      return undefined
    }
    return JSON.parse(serializedState)
  } catch(err) {
    return undefined
  };
};

// Save State
export const saveState = async (state) => {
  try {
    const serializedState = JSON.stringify(state)
    await AsyncStorage.setItem(DIGITAL_MENU_STATE, serializedState)
  } catch(error) {
    console.log("Error saving data:", error)
  };
};

const persistedState = loadState();

const store = createStore(
  rootReducer,
  persistedState,
  storeEnhancers(applyMiddleware(thunk))
);

store.subscribe(() => {
  saveState(store.getState())
});

export default store;
