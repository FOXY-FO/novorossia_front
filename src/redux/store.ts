import { combineReducers, createStore } from "redux"
import { reducer as formReducer } from "redux-form"
import authReducer from "./auth-reducer"
import appReducer from "./app-reducer"

const rootReducer = combineReducers({
  app: appReducer,
  auth: authReducer,
  form: formReducer,
})

type TRootReducer = typeof rootReducer
export type TAppState = ReturnType<TRootReducer>

const store = createStore(rootReducer)

export default store
