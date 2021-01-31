import { createStore, applyMiddleware } from "redux";
import rootReducer from "./rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
// import { persistStore } from "redux-persist";

const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)));
// const persistor = persistStore(store);

export default store;