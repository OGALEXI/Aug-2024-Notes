import { createStore, combineReducers, applyMiddleware, compose} from 'redux';
import fruitReducer from './fruitReducer';

//CREATE ROOT REDUCER

const rootReducer = combineReducers({
    fruitState: fruitReducer
})

let enhancer

if (import.meta.env.MODE !== "production") {
    const logger = (await import("redux-logger")).default;
    const composeEnhancers =
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    enhancer = composeEnhancers(applyMiddleware(logger));
}
  

//CREATE STORE

const configureStore = (preloadedState) => {
    return createStore(rootReducer, preloadedState, enhancer)
}

export default configureStore;