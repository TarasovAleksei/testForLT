import React, {useEffect, useState} from 'react';
import {SensorList} from '../Pages/SensorList/SensorList';
import s from './App.module.css'
import {SensorItem} from "../Pages/SensorItem/SensorItem";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "./store";
import {
    addSensorAction,
    getSensors,
    InitialStateType,
    setToggleAction
} from "../Pages/SensorList/sensorReducer";

export const App = () => {
    const [activeModeItem, setActiveModeItem] = useState<boolean>(false)
    const [activeIdSensor, setActiveIdSensor] = useState<string>('')
    const {sensors, isLoading} = useSelector<AppStoreType, InitialStateType>(state => state.sensors)
    const dispatch = useDispatch()
    useEffect(() => {
        setActiveModeItem(false)
        dispatch(getSensors())
    }, [dispatch])

    const getActiveSensor = (id: string) => {
        setActiveIdSensor(id)
        setActiveModeItem(true)
    }
    const addSensor = () => {
        dispatch(addSensorAction())
    }
    const onToggle = (id: string, condition: boolean) => {
        dispatch(setToggleAction(id, condition))
    }
    return (
        <>
            <div className={s.container}>
                <SensorList
                    sensors={sensors}
                    isLoading={isLoading}
                    addSensor={addSensor}
                    onToggle={onToggle}
                    getActiveSensor={getActiveSensor}
                    activeIdSensor={activeIdSensor}
                />
                {activeModeItem && sensors.length ?
                    <SensorItem
                        sensors={sensors}
                        activeIdSensor={activeIdSensor}
                        onToggle={onToggle}
                    />
                    : null}
            </div>
        </>
    );
};


