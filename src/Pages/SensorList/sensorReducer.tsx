import {TotalDispatchType} from "../../App/store";
import axios from "axios";

export const initialState = {
    sensors: [] as SensorType[],
    error: '',
    isLoading: false,
}

export const sensorReducer = (state: InitialStateType = initialState, action: TotalActionsType): InitialStateType => {
    switch (action.type) {
        case "SET_SENSORS":
            return {
                ...state,
                sensors: [...action.sensors]
            }
        case "ADD_SENSOR":
            const sensor: SensorType = {
                id: Math.floor((Math.random() * 10000000) + 1).toString(),
                device: {serial: '123456', number: 'SW1'},
                condition: true,
                currentValue: '+20°C',
                range: 'от +10 до +40°C',
                model: 'ESpD 450'
            }
            return {
                ...state,
                sensors: [...state.sensors, sensor]
            }
        case "SET_ERROR":
            return {
                ...state,
                error: action.error
            }
        case "SET_LOADING":
            return {
                ...state,
                isLoading: action.isLoading
            }
        case "SET_TOGGLE":
            return {
                ...state,
                sensors: state.sensors.map(s => s.id === action.id ? {...s, condition: action.condition} : {...s})
            }
        default:
            return state
    }
}
//actions
export const setSensorsAction = (sensors: any) => ({type: "SET_SENSORS", sensors} as const)
export const addSensorAction = () => ({type: "ADD_SENSOR"} as const)
export const setErrorAction = (error: string) => ({type: 'SET_ERROR', error} as const)
export const setLoadingAction = (isLoading: boolean) => ({type: 'SET_LOADING', isLoading} as const)
export const setToggleAction = (id: string, condition: boolean) => ({type: 'SET_TOGGLE', id, condition} as const)

//thunks
export const getSensors = () => async (dispatch: TotalDispatchType) => {
    try {
        dispatch(setLoadingAction(true))
        setTimeout(async () => {
            const mockSensors = await axios.get<SensorType[]>('./data.json').then(res => res.data)
            if (mockSensors) {
                dispatch(setSensorsAction(mockSensors))
            } else {
                dispatch(setErrorAction('error'))
            }
            dispatch(setLoadingAction(false))
        }, 1000)
    } catch (e) {
        dispatch(setErrorAction('error'))
    }
}
//types
export type SensorType = {
    id: string,
    device: DeviceType,
    condition: boolean,
    currentValue: string,
    range: string,
    model: string,
}
export type DeviceType = {
    serial: string,
    number: string,
}
export type InitialStateType = typeof initialState
export type TotalActionsType =
    ReturnType<typeof setSensorsAction> |
    ReturnType<typeof addSensorAction> |
    ReturnType<typeof setErrorAction> |
    ReturnType<typeof setLoadingAction> |
    ReturnType<typeof setToggleAction>
