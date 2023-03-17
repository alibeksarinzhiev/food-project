import React, {useEffect, useState} from 'react';
import './Favourite.scss'
import Toggle from './img/Toggle.svg'

import {AiFillStar} from 'react-icons/ai'
import {GrFormClose} from 'react-icons/gr'
import axios from "axios";

const Favourite = () => {
    const [MilkProducts,setMilkProducts] = useState([])
    useEffect(()=>{
        axios.get('http://localhost:8080/product')
            .then(({data})=>setMilkProducts(data))
    },[])
    console.log(MilkProducts)
    return (
        <section className='favourite'>
            <div className="container">
                <h1 className='phah'>Избранное</h1>
                <div className="favourite-parent">
                    <div className="favourite--filter">
                        <select className="favourite--filter__filter">
                            <option value="">Фильтр</option>
                            <option value="">Молоко</option>
                            <option value="">Сливки</option>
                            <option value="">Яйцо</option>
                        </select>
                        <div className="favourite--filter__price">
                            <h3 className='price'>Цена</h3>
                            <button className='btn'>Очистить</button>
                        </div>

                        <div className="favourite--filter__PriceValue">
                            <input type="text" placeholder='0'/>
                            <div className="favourite--filter__PriceValue--line"></div>
                            <input type="text" placeholder='0'/>
                        </div>

                        <div className="favourite--filter__MilkProducts">
                            <p>Молоко</p>
                            <p>Сливки</p>
                            <p>Яйцо</p>
                        </div>
                        <div className="favourite--filter__inStock">
                            <div className="favourite--filter__inStock--toggle">
                                <img src={Toggle} alt=""/>
                                <p>В наличии</p>
                            </div>
                            <button>Применить</button>
                        </div>

                    </div>
                    <div className="favourite--right">
                        <div className="favourite--right__priceAndClean">
                            <button className='Price'>Цена от 99 до 2599 <GrFormClose/></button>
                            <button className='search'>Очистить <GrFormClose/></button>
                        </div>
                        <div className="favourite--right__products">
                            {
                                MilkProducts.filter((el) => el.category === 'MilkProducts')
                                    .map((el)=>(
                                        <div className="favourite--right__products--product">
                                            <img src={el.image} alt="img"/>
                                            {
                                                el.sale ?
                                                    <div className="favourite--right__products--product__price">
                                                        <div className='sale'>-50%</div>
                                                    <h3>{el.price}</h3>
                                                    <h4>{el.withoutsale}</h4>
                                                    </div> :  <div className="favourite--right__products--product__price">
                                                        <h3>{el.price}</h3></div>
                                            }
                                            {
                                                el.sale ?
                                                    <div className="favourite--right__products--product__pay">
                                                    <p>{el.paymentcard}</p>
                                                    <p>{el.status}</p>
                                                </div> : ""
                                            }
                                            <h6>{el.title}</h6>
                                            <div className="favourite--right__products--product__stars">
                                                <p className='star-orange'>
                                                    <AiFillStar/>
                                                </p>

                                                <p className='star-orange'>
                                                    <AiFillStar/>
                                                </p>

                                                <p className='star-orange'>
                                                    <AiFillStar/>
                                                </p>

                                                <p className='star-grey'>
                                                    <AiFillStar/>
                                                </p>

                                                <p className='star-grey'>
                                                    <AiFillStar/>
                                                </p>
                                            </div>
                                            <button>В корзину</button>
                                        </div>
                                    ))
                            }
                        </div>
                        <div className="favourite--right__btn">
                            <button>Показать ещё</button>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};
export default Favourite;