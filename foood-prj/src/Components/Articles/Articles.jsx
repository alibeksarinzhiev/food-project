import React from 'react';
import './Articles.scss'

const Articles = () => {
    return (
        <section className='theme'>

            <div className='articles'>
                
                <h3 className='section-article'>Статьи</h3>
               
            
                <div className='cards'>
                <div className='articles_card'>
                    <img src="./image/image 5.svg" alt="" />
                    <p className='date'>05.03.2021</p>
                    <p className='descr'>Режим использования масок и перчаток на территории магазинов</p>
                    <p className='text'>Подробная информация о режимах использования масок и перчаток на территории магазинов "ЛЕНТА". Информация обновляется каждый будний день.</p>
                    <button className='more-info'>Подробнее</button>
                </div>
                <div className='articles_card'>
                    <img src="./image/second.svg" alt="" />
                    <p className='date'>05.03.2021</p>
                    <p className='descr'>Весеннее настроение для каждой</p>
                    <p className='text'>8 Марта – это не просто Международный женский день, это ещё день тюльпанов, приятных сюрпризов и праздничных тёплых пожеланий.</p>
                    <button className='more-info'>Подробнее</button>
                </div>
                <div className='articles_card'>
                    <img src="./image/image 5 (1).svg" alt="" />
                    <p className='date'>22.02.2020</p>
                    <p className='descr'>ЗОЖ или ФАСТФУД. А вы на чьей стороне? Голосуем!</p>
                    <p className='text'>Голосуйте за любимые категории, выбирайте категорию-победителя в мобильном приложении и получайте кешбэк 10% баллами в апреле!</p>
                    <button className='more-info'>Подробнее</button>
                </div>
                </div>
            </div>
            
        </section>
    );
};

export default Articles;