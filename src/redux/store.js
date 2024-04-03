import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from "redux-devtools"
import rootReducer from "./reducers"
import {thunk} from 'redux-thunk'
//

let store = createStore(rootReducer, applyMiddleware(thunk) )
export default store
