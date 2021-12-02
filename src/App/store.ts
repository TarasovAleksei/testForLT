import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from 'redux-thunk';
import {sensorReducer} from "../Pages/SensorList/sensorReducer";

const rootReducer = combineReducers({
    sensors: sensorReducer
})
export const store = createStore(rootReducer, applyMiddleware(thunk))
export type AppStoreType = ReturnType<typeof rootReducer>
export type TotalDispatchType = typeof store.dispatch