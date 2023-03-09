import React from 'react';
import './Card.scss'

const Card = ({el}) => {
    return (
        <div className='card'>
            <img src={el.image} alt=""/>
            <div className='card__price'>
                <h2 className='card__card'>{el.price} <br/>
                <span>
                    {el.paymentcard}
                </span>
                </h2>
                <p className='card__cash'>{el.withoutsale} <br/>
                    <span>
                    {el.paymentcash}
                </span>
                </p>
            </div>
            <p className='card__text'>{el.title}</p>
            <button>В корзину</button>


                {el.sale ?
                    <div className='card__sale'>50%</div>
                    : ''}

        </div>
    );
};

export default Card;