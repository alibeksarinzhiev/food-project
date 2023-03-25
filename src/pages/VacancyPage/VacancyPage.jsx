import React from 'react';

import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import './vacancy.scss';


const VacancyPage = () => {
    return (
        <section className='vacancy__page'>
            <div className="container">
                <article className='section__title'>
                    <article className='navPanel'>
                        <p>Главная</p>
                        <ArrowForwardIosIcon/>
                        <p className='greyName'>Вакансии</p>
                    </article>
                    <h2 className='sectionName'>Вакансии</h2>
                </article>
                <div className="itemWrapper">
                    <div className="item">
                        <h4 className='item__title'>Должность</h4>
                        <article>
                            <p className='disName'>Требования</p>
                            <p>Текст про требования текст про требования текст про требования текст про требования текст про требования</p>
                        </article>
                        <article>
                            <p className='disName'>Обязанности</p>
                            <p>Текст про обязаности текст про обязаности текст про обязаности текст про обязаности текст про обязаности</p>
                        </article>
                        <article>
                            <p className='disName'>Условия</p>
                            <p>Текст про условия текст про условия текст про условия текст про условия текст про условия текст про условия</p>
                        </article>
                        <article>
                            <p className='disName'>Звоните</p>
                            <p className='phoneNumber'> <LocalPhoneOutlinedIcon/>+7 904 271 35 90</p>
                        </article>
                    </div>
                    
                </div>
            </div>
        </section>
    );
};

export default VacancyPage;