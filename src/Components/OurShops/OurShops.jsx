import React from 'react';
import './OurShops.scss'

const OurShops = () => {
    return (
        <section className='ourshops'>
            <div className='shops'>
                <h3>Наши магазины</h3>
                <div className='shops_cities'>
                    <p>п.Щельяюр</p>
                    <p>д.Вертеп</p>
                    <p>с.Краснобор</p>
                    <p>д.Диюр</p>
                </div>
                <img src="./image/cardimg.svg" alt="" />
            </div>
            
        </section>
    );
};

export default OurShops;