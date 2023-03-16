import { color } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';
import './Basket.scss';
import { useDispatch, useSelector } from "react-redux";
import { addCount, minusCount, removeProduct, changeCheck } from '../../redux/reducer/cart'
import Checkbox from '@mui/material/Checkbox';
import { pink } from '@mui/material/colors';


const Basket = () => {
    const dispatch = useDispatch()
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    const { data } = useSelector(state => state.cart)

    console.log(data);
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
                    <p2 onClick={() => dispatch(removeProduct(true))}>Удалить выбранные</p2>
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
                                        onClick={() => dispatch(changeCheck(el.id))}
                                        sx={{
                                            color: pink[800],
                                            '&.Mui-checked': {
                                                color: pink[600],
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
                                                <h4 className='products-price'>{el.price}</h4>
                                                <p className='products-count' >за шт.</p>
                                            </div>
                                        </div>
                                        <div className="right-product">

                                            <div className="add-card">
                                                <button onClick={() => dispatch(minusCount(el))} type='button'>-</button>
                                                <p>{el.count}</p>
                                                <button onClick={() => dispatch(addCount(el))} type='button'>+</button>
                                            </div>

                                            <h3 className='prices'>89,00 ₽</h3>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>

                    <div className="right-card-basket">
                        <div className="right-basket-toggle">
                            <div class="toggle-switch">
                                <input class="toggle-input" id="toggle" type="checkbox" />
                                <label class="toggle-label" for="toggle"></label>
                            </div>
                            <h4 className='sum-totals'>Списать 200 ₽ </h4>
                        </div>
                        <p className='total-card'> На карте накоплено 200 ₽ </p>

                        <div className="line"></div>

                        <div className="count-basket">
                            <p className='total-card'>3 товара</p>
                            <h4 className='sum-totals'>258,10  ₽ </h4>
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