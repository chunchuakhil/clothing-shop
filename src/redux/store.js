const { createStore, applyMiddleware } = require("redux");
const { default: logger } = require("redux-logger");
const { default: rootReducer } = require("./root-reducer");
const middleWares = [logger];
const store = createStore(rootReducer, applyMiddleware(...middleWares));
export default store;
