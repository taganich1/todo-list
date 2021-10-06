import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { rootReducer } from "../reducer/index";
import rootSaga from "../saga/saga";

export const createAppStore = () => {
  const sagaMiddleware = createSagaMiddleware();

  const middleware = applyMiddleware(sagaMiddleware);

  const store = createStore(rootReducer, middleware);

  /*
    console.log(store.getState());
  */

  sagaMiddleware.run(rootSaga);

  return store;
};
