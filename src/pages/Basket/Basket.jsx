import { color } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';
import './Basket.scss';
import {useDispatch, useSelector} from "react-redux";
import {addCount,minusCount} from '../../redux/reducer/cart'


const Basket = () => {
    const dispatch = useDispatch()

    const {data} = useSelector(state=>state.cart)

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
                    <button>-</button>
                    <p1>Выделить всё</p1>
                    <p2>Удалить выбранные</p2>
                </div>

                <div className="basket-products">
                    
                    <div className="basket-pro">
                        {
                            data.map((el)=>(
                                <div className='left-basket-product'>
                                    <div className="left-product">
                                        <div className="product-img">
                                            <img src={el.image} alt="" />
                                        </div>
                                        <div className="left-basket-product">



                                            <div className="products-name">
                                                <h3 >{el.title}</h3>

                                                <div className="price-product">
                                                    <h4>{el.price}</h4>
                                                    <p >за шт.</p>
                                                </div>
                                            </div>

                                        </div>

                                        <div className="right-product">

                                            <div className="add-card">
                                                <button onClick={()=>dispatch(minusCount(el))} type='button'>-</button>
                                                <p>{el.count}</p>
                                                <button onClick={()=>dispatch(addCount(el))} type='button'>+</button>
                                            </div>

                                            <h3>89,00 ₽</h3>
                                        </div>
                                </div>
                                </div>
                            ))
                        }








                    </div>

                    <div className="right-basket">
                        
                        <div className="right-basket-toggle">
                        <div class="toggle-switch">
                            <input class="toggle-input" id="toggle" type="checkbox" />
                            <label class="toggle-label" for="toggle"></label>
                        </div>
                            <h4>Списать 200 ₽ </h4>
                        </div>
                        <p> На карте накоплено 200 ₽ </p>

                        <div className="line"></div>

                        <div className="up-basket">
                            <p>3 товара</p>
                            <h4>258,10  ₽ </h4>
                        </div>

                        <div className="top-basket">
                            <p>Скидка</p>
                            <h4 >-8,01  ₽ </h4>
                        </div>

                        <div className="line"></div>

                        <div className="result-basket">
                            <p>Итог</p>
                            <h3>250,09 ₽ </h3>
                        </div>
                        <div className="bonus">
                            <img src="./image/Vector1bas.png" alt="" />
                            <p className='bonus' >Вы получаете 100 бонусов</p>
                        </div>

                        <button className='min'>Минимальная сумма заказа 1000р</button>
                        <button className='order'>Оформить заказ</button>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Basket;