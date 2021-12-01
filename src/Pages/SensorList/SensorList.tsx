import React, {FC} from 'react';
import s from './SensorList.module.css'
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import {Fab} from "@mui/material";

export const SensorList: FC = () => {
    const sensors = [
        {
            id: '1234578',
            device: {serial: '123456', number: 'SW1'},
            condition: true,
            currentValue: '+70°C',
            range: 'от +10 до +90°C',
            model: 'ESpD 417'
        },
        {
            id: '1234577',
            device: {serial: '123456', number: 'SW1'},
            condition: false,
            currentValue:'+17°C',
            range: 'от +10 до +30°C',
            model: 'ESpD 420'
        },
        {
            id: '1234576',
            device: {serial: '123456', number: 'SW1'},
            condition: true,
            currentValue: '+19°C',
            range: 'от +10 до +30°C',
            model: 'ESpD 425'
        },
        {
            id: '1234575',
            device: {serial: '123456', number: 'SW1'},
            condition: true,
            currentValue: '+10°C',
            range: 'от +10 до +30°C',
            model: 'ESpD 427'
        },
    ]
    const sensorItem = sensors.map(s => {
        return (
            <Sensor
                key={s.id}
                id={s.id}
                serial={s.device.serial}
                number={s.device.number}
                condition={s.condition}
                currentValue={s.currentValue}
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
                <Fab style={{
                    backgroundColor: '#F8BC3A',
                    color: 'white',
                    width: '24px',
                    height: '24px',
                    marginLeft: '20px'
                }} aria-label="add">
                    <AddIcon/>
                </Fab>
                <div className={s.titleForButton}>
                    Добавить датчик
                </div>
            </div>
            {sensorItem}
        </div>
    )
}
export const Sensor: FC<SensorsType> = ({condition, currentValue, serial, number, id}) => {
    return (
        <div className={s.itemContainer}>
            <div className={[s.sensorItem, s.sensorId].join(' ')}>{id}</div>
            <div className={[s.sensorItem, s.sensorDevice].join(' ')}>
                <div className={s.serialColor}>{serial}</div>
                <div>{number}</div>
            </div>
            <div className={[s.sensorItem, s.sensorCondition].join(' ')}>{condition ? 'Вкл' : 'Выкл'}</div>
            <div className={[s.sensorItem, s.sensorValue].join(' ')}>{currentValue}</div>
        </div>
    )
}

interface SensorsType {
    id: string,
    serial: string,
    number: string,
    condition: boolean,
    currentValue: string,
}
