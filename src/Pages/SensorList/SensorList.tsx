import React, {FC} from 'react';
import s from './SensorList.module.css'
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import {Box, CircularProgress, Fab} from "@mui/material";
import {SensorType} from "./sensorReducer";
import {Sensor} from './Sensor/Sensor';

interface SensorListType {
    sensors: SensorType[],
    isLoading: boolean,
    addSensor: () => void,
    onToggle: (id: string, condition: boolean) => void,
    getActiveSensor: (id: string) => void,
    activeIdSensor: string,
}

export const SensorList: FC<SensorListType> = ({
                                                   sensors,
                                                   getActiveSensor,
                                                   isLoading,
                                                   addSensor,
                                                   onToggle,
                                                   activeIdSensor
                                               }) => {

    const sensorItem = sensors.map(s => {
        return (
            <Sensor
                key={s.id}
                id={s.id}
                serial={s.device.serial}
                number={s.device.number}
                condition={s.condition}
                currentValue={s.currentValue}
                onToggle={onToggle}
                getActiveSensor={getActiveSensor}
                activeIdSensor={activeIdSensor}
            />
        )
    })
    return (
        <div className={s.totalContainer}>
            <div className={s.titleContainer}>
                <div className={s.title}>Датчики температуры</div>
                <div className={s.search}><SearchIcon/></div>
            </div>
            <div className={s.titleTableContainer}>
                <div className={s.additionalTitleTableContainer}>
                    <div className={s.titleItem}>ID</div>
                    <div className={s.titleItem}>Устройство</div>
                    <div className={s.titleItem}>Состояние</div>
                    <div className={s.titleItem}>Значение</div>
                </div>
            </div>
            <div className={s.buttonContainer}>
                <Fab onClick={addSensor} style={{
                    backgroundColor: '#F8BC3A',
                    color: 'white',
                    width: '24px',
                    height: '24px',
                    marginLeft: '20px'
                }} aria-label="add">
                    <AddIcon/>
                </Fab>
                <div onClick={addSensor} className={s.titleForButton}>
                    Добавить датчик
                </div>
            </div>
            {isLoading ?
                <Box style={{
                    display: 'flex',
                    justifyContent: 'center',
                    marginTop: '100px'
                }}>
                    <CircularProgress/>
                </Box>
                :
                sensorItem
            }
        </div>
    )
}

