import {Accordion, AccordionDetails, AccordionSummary, Switch} from '@mui/material';
import React from 'react';
import s from './SensorItem.module.css'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


export const SensorItem = () => {
    const [checked, setChecked] = React.useState<boolean>(true);
    const handleChangeSwitch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
    };
    return (
        <div className={s.totalContainer}>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <div className={s.titleItem}>
                        12345678
                    </div>

                </AccordionSummary>
                <AccordionDetails style={{height: '890px'}}>
                    <div className={s.conditionContainer}>
                        <div className={s.condition}>
                            Состояние
                        </div>
                        <div className={s.toggleContainer}>
                            <span className={s.toggle}>Вкл</span>
                            <Switch
                                color={'primary'}
                                checked={true}
                                onChange={handleChangeSwitch}
                                inputProps={{'aria-label': 'controlled'}}
                            />
                        </div>
                    </div>
                    <div className={s.deviceContainer}>
                        <div className={s.device}>
                            <span className={s.deviceSerial}>123456</span> SW1
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
                                                +17°C
                                            </div>
                                        </div>
                                        <div className={s.valueContainer}>
                                            <div className={s.range}>
                                                Диапазон
                                            </div>
                                            <div className={s.range}>
                                                от +10 до +30°C
                                            </div>
                                        </div>
                                        <div className={s.valueContainer}>
                                            <div className={s.range}>
                                                Модель
                                            </div>
                                            <div className={s.range}>
                                                ESpD 420
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