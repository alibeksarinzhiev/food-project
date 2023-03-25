import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

import { green } from '@mui/material/colors';
import Checkbox from '@mui/material/Checkbox';

import { useDispatch, useSelector } from "react-redux";
import { addCount, minusCount, removeProduct, changeCheck,changeAllChecked } from '../../redux/reducer/cart';

import './Basket.scss';

const Basket = () => {
    const dispatch = useDispatch()

    const { data } = useSelector(state => state.cart)
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

    const [status , setStatus] = useState(false)
    const [price , setPrice] = useState(0)
    const [salePrice , setSalePrice] = useState(0)
    
    useEffect(() =>{
        setSalePrice(Math.round(Math.floor(price)))
    },[]) 
    useEffect(() => {
        setPrice(data.reduce((acc , prev) => acc + +prev.price,0))
    },[])
    return (

        <section className='basket'>
            <div className="container">

                <div className="links">
                    <Link>Главная</Link>
                    <img src="./image/strokebas.png" alt="" />
                    <Link> Корзина</Link>
                </div>

                <div className="top-bas">
                    <h1>КОРЗИНА</h1>
                </div>

                <div className="buttons-opt">
                    <button onClick={() => dispatch(changeAllChecked())&& setStatus(!status)}>{status ? '-' : '+'}</button>
                    <p onClick={() => dispatch(changeAllChecked())&& setStatus(!status)}>Выделить всё</p>
                    <p style={{color:'red'}} onClick={() => dispatch(removeProduct(true))}>Удалить выбранные</p>
                </div>

                <div className="basket-products"> 

                    <div className="basket-pro">
                        {
                            data.map((el) => (
                                <div key={el.id} className='left-basket-product'>
                                    <Checkbox
                                        className='checked'
                                        {...label}
                                        defaultChecked
                                        checked={el.checked}
                                        onClick={() => dispatch(changeCheck(el.id))}
                                        sx={{
                                            color: green[800],
                                            '&.Mui-checked': {
                                                color: green[600],
                                            },
                                        }}
                                    />
                                    
                                    <div className="left-product">
                                        <div className="products-img">
                                            <img className='products-img' src={el.image} alt="" />
                                        </div>
                                        <div className="products-name">
                                            <h3 className='product-name' >{el.title}</h3>

                                            <div className="product-price">
                                                <h4 className='products-price'>{el.price} ₽</h4>
                                                <p className='products-count' >за шт.</p>
                                            </div>
                                        </div>
                                        <div className="right-product">

                                            <div className="add-card">
                                                <button className='pluse-add-card' onClick={() => dispatch(minusCount(el))} type='button'>-</button>
                                                <p>{el.count}</p>
                                                <button className='minus-add-card' onClick={() => dispatch(addCount(el))} type='button'>+</button>
                                            </div>

                                            <h3 className='price-product-basket'>{el.price * el.count} ₽</h3>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>

                    <div className="right-card-basket">
                        <div className="right-basket-toggle">
                            <div className="toggle-switch">
                                <input className="toggle-input" id="toggle" type="checkbox" />
                                <label className="toggle-label" htmlFor="toggle"></label>
                            </div>
                            <h4 className='sum-totals'>Списать 200 ₽ </h4>
                        </div>
                        <p className='total-card'> На карте накоплено 200 ₽ </p>

                        <div className="line"></div>

                        <div className="count-basket">
                            <p className='total-card'>{data.length} товара</p>
                            <h4 className='sum-totals'>{price} ₽</h4>
                        </div>

                        <div className="discount-basket">
                            <p className='total-card'>Скидка</p>
                            <h4 className='card-discount'>-8,01  ₽ </h4>
                        </div>

                        <div className="line"></div>

                        <div className="total-basket">
                            <p className='total-card'>Итог</p>
                            <h3 className='sum-totals'>250,09 ₽ </h3>
                        </div>
                        <div className="card-bonus">
                            <img src="./image/Vector1bas.png" alt="" />
                            <p className='bonus' >Вы получаете 100 бонусов</p>
                        </div>

                        <button className='min-order'>Минимальная сумма заказа 1000р</button>
                        <button className='place-order'>Оформить заказ</button>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Basket;