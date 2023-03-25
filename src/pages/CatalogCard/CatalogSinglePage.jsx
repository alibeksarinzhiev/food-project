import React, {useEffect, useState} from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import axios from 'axios';
import {Link, useLocation, useNavigate} from 'react-router-dom';
import Toggle from './img/Toggle.svg'
import {GrFormClose} from 'react-icons/gr'

import './catalogSinglePage.scss'

const CatalogSinglePage = () => {

    const [product, setProduct] = useState([])
    let params = useLocation()
    let path = params.pathname.split('/').at(-1)
    let navigate = useNavigate()


    // const { id } = useParams()
    useEffect(() => {
        const productUrl = `http://localhost:8080/product`
        
        axios
            .get(productUrl)
            .then(({ data }) => setProduct(data))

    }, [])

    return (
        <section className='catalogSinglePage'>
            <div className="container">
                <div className="catalog-parent">
                <div className="catalog__title">
                <article>
                    <h3>Главная</h3>
                        <ArrowForwardIosIcon />
                        <h3 onClick={()=>navigate(-1)}>Каталог</h3>
                        <ArrowForwardIosIcon />
                        <h3 className='articleProductName'>
                            {path}
                            </h3>
                    </article>
                    </div>

                    <h2 className='productName'>
                        {path}
                        </h2>
                        <div className="productLinks">
                       <p> <Link> Товары нашего производства</Link> </p>
                       <p> <Link>Полезное питание</Link></p>
                       <p> <Link>Без ГМО</Link></p>
                        </div>
                        
                        <div className="catalogCard__filter">
                        <div className="catalog__filter">
                        <select className="catalog__filter__option">
                            <option value="">Фильтр</option>
                            <option value="">Молоко</option>
                            <option value="">Сливки</option>
                            <option value="">Яйцо</option>
                        </select>
                        <div className="catalog__filter__price">
                            <h3 className='price'>Цена</h3>
                            <button className='btn'>Очистить</button>
                        </div>

                        <div className="catalog__filter__PriceValue">
                            <input type="text" placeholder='0'/>
                            <div className="catalog__filter__PriceValue__line"></div>
                            <input type="text" placeholder='100'/>
                        </div>

                        <div className="catalog__filter__products">
                            <p>Молоко</p>
                            <p>Сливки</p>
                            <p>Яйцо</p>
                        </div>
                        <div className="catalog__filter__inStock">
                            <div className="catalog__filter__inStock__toggle">
                                <img src={Toggle} alt=""/>
                                <p>В наличии</p>
                            </div>
                            <button>Применить</button>
                        </div>

                    </div>
                    <div className="catalogCard__right">
                        <div className="catalogCard__right__priceAndClean">
                            <button className='Price'>Цена от 99 до 2599 <GrFormClose/></button>
                            <button className='search'>Очистить фильтры <GrFormClose/></button>
                        </div>
                        <div className="catalogCard__right__products">
                            {
                                product.filter((el)=>(
                                    el.category===path
                                )).map((el)=>(
                                    <div className="catalogCard__right__products__product">
                                        <img src={el.image} alt="img"/>

                                        <div className="catalogCard__right__product__price">
                                            <div className='sale'>-50%</div>
                                            <h3>{el.price}</h3>
                                            <h4>{el.withoutsale}</h4>
                                        </div>
                                        <div className="catalogCard__right__products--price">
                                            <h3>{el.price}</h3></div>


                                        <div className="catalogCard__right__products__pay">
                                            <p>{el.paymentcard}</p>
                                            <p>{el.status}</p>
                                        </div>

                                        <h6>{el.title}</h6>
                                        <h2>{el.category}</h2>
                                        <button>В корзину</button>
                                    </div>
                                ))
                            }

                
                        </div>
                        <div className="catalogCard__right__btn">
                            <button>Показать ещё</button>
                        </div>
                        </div>
                        </div>
                        </div>
            </div>
        </section>
    );
};

export default CatalogSinglePage;