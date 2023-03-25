import React from 'react';
import './Special.scss';



const Special = () => {
    return (
        <section className='special'>
            <div className='special_container'>
            <h3>Специальные предложения</h3>
            <div className='special_images'>
                <img src="./image/banner-hover.svg" alt="" />
                <img src="./image/banner.svg" alt="" className='second' />
            </div>
            </div>
            
        </section>
    );
};

export default Special;