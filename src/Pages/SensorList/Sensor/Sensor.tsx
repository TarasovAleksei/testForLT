import React, {FC} from "react";
import s from "../SensorList.module.css";

interface SensorsType {
    id: string,
    serial: string,
    number: string,
    condition: boolean,
    currentValue: string,
    onToggle: (id: string, condition: boolean) => void,
    getActiveSensor: (id: string) => void
    activeIdSensor: string,
}

export const Sensor: FC<SensorsType> = ({
                                            condition, currentValue, serial,
                                            number, id, onToggle, getActiveSensor, activeIdSensor,
                                        }) => {
    const totalClassName = activeIdSensor !== id? s.itemContainer : s.activeItemContainer
    return (
        <div onClick={() => {
            getActiveSensor(id)
        }} className={totalClassName}>
            <div className={[s.sensorItem, s.sensorId].join(' ')}>{id}</div>
            <div className={[s.sensorItem, s.sensorDevice].join(' ')}>
                <div className={s.serialColor}>{serial}</div>
                <div>{number}</div>
            </div>
            <div className={[s.sensorItem, s.sensorCondition].join(' ')} onClick={() => {
                onToggle(id, !condition)
            }}>{condition ? 'Вкл' : 'Выкл'}</div>
            <div className={[s.sensorItem, s.sensorValue].join(' ')}>{currentValue}</div>
        </div>
    )
}

