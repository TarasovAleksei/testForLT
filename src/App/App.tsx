import React from 'react';
import {SensorList} from '../Pages/SensorList/SensorList';
import s from './App.module.css'
import {SensorItem} from "../Pages/SensorItem/SensorItem";


export const App = () => {

    return (
        <>
            <div className={s.container}>
                <SensorList/>
                <SensorItem/>
            </div>

        </>
    );
};


