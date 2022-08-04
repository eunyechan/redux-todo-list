import { createStore } from "redux";
import { combineReducers } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import todos from "../modules/inputvalue";

export const persisConfig = {
  key: "root",
  // reducer의 어느 지점부터 데이터를 저장할지
  storage,
  // localStorage에 저장하기
  whitelist: ["todos"],
};

const rootReducer = combineReducers({ todos });
const perReducer = persistReducer(persisConfig, rootReducer);

export const store = createStore(perReducer);
export const persistor = persistStore(store);
