import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import produceReducer from './produce';
import cartReducer from './cart';

const rootReducer = combineReducers({
    produce: produceReducer,
    cart: cartReducer
})


let enhancer;

if (import.meta.env.MODE !== "production") {
  const logger = (await import("redux-logger")).default;
  const composeEnhancers =
    typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true })
      : compose;
  enhancer = composeEnhancers(applyMiddleware(logger));
}

const configureStore = (preLoadedState) => {
    return createStore(rootReducer, preLoadedState, enhancer)
};

export default configureStore