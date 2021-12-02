import {Accordion, AccordionDetails, AccordionSummary, Switch} from '@mui/material';
import React, {FC} from 'react';
import s from './SensorItem.module.css'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {SensorType} from "../SensorList/sensorReducer";


interface SensorItemType {
    sensors: SensorType[],
    onToggle: (id: string, condition: boolean) => void,
    activeIdSensor: string,
}
export const SensorItem:FC<SensorItemType> = ({onToggle, sensors,activeIdSensor}) => {
    const index = sensors.findIndex(s=>s.id===activeIdSensor)
    const handleChangeSwitch = (event: React.ChangeEvent<HTMLInputElement>) => {
        onToggle(sensors[index].id, event.target.checked)
    }
    return (
        <div className={s.totalContainer}>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <div className={s.titleItem}>
                        {sensors[index].id}
                    </div>

                </AccordionSummary>
                <AccordionDetails style={{height: '890px'}}>
                    <div className={s.conditionContainer}>
                        <div className={s.condition}>
                            Состояние
                        </div>
                        <div className={s.toggleContainer}>
                            <span className={s.toggle}>{sensors[index].condition? 'Вкл' : 'Выкл'}</span>
                            <Switch
                                color={'primary'}
                                checked={sensors[index].condition}
                                onChange={handleChangeSwitch}
                                inputProps={{'aria-label': 'controlled'}}
                            />
                        </div>
                    </div>
                    <div className={s.deviceContainer}>
                        <div className={s.device}>
                            <span className={s.deviceSerial}>{sensors[index].device.serial}</span> {sensors[index].device.number}
                        </div>
                    </div>
                    <div>
                        <Accordion style={{
                            width: '316px',
                            marginLeft: '-16px'
                        }}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon/>}
                                aria-controls="panel1bh-content"
                                id="panel1bh-header"
                            >
                                <div className={s.indicators}>
                                    Показатели датчика
                                </div>
                            </AccordionSummary>
                            <AccordionDetails style={{height: '704px'}}>
                                <div className={s.indicatorsContainer}>
                                    <div className={s.valuesContainer}>
                                        <div className={s.valueContainer}>
                                            <div className={s.value}>
                                                Текущее значение
                                            </div>
                                            <div className={s.value}>
                                                {sensors[index].currentValue}
                                            </div>
                                        </div>
                                        <div className={s.valueContainer}>
                                            <div className={s.range}>
                                                Диапазон
                                            </div>
                                            <div className={s.range}>
                                                {sensors[index].range}
                                            </div>
                                        </div>
                                        <div className={s.valueContainer}>
                                            <div className={s.range}>
                                                Модель
                                            </div>
                                            <div className={s.range}>
                                                {sensors[index].model}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </AccordionDetails>
                        </Accordion>
                    </div>
                </AccordionDetails>
            </Accordion>

        </div>
    )
}