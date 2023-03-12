
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';


import ShareTwoToneIcon from '@mui/icons-material/ShareTwoTone';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import FavoriteBorderTwoToneIcon from '@mui/icons-material/FavoriteBorderTwoTone';

import MainCard from './MainCard/MainCard';

import './SingleCard.scss'

const SingleCard = () => {

    const [product, setProduct] = useState([])
    const [interest, setInterest] = useState([])

    const { id } = useParams()
    useEffect(() => {
        const productUrl = `http://localhost:8080/product/${id}`
        const interestUrl = `http://localhost:8080/product`
        axios
            .get(productUrl)
            .then(({ data }) => setProduct(data))

        axios
            .get(interestUrl)
            .then(({ data }) => setInterest(data))
    }, [])


    return (
        <section className='singleCard'>
            <div className="container">
                <div className='titleInner'>
                    <article>
                        <h3>Главная</h3>
                        <ArrowForwardIosIcon />
                        <h3>Каталог</h3>
                        <ArrowForwardIosIcon />
                        <h3>Молоко, сыр, яйцо</h3>
                        <ArrowForwardIosIcon />
                        <h3 className='articleProductName'>{product.title}</h3>
                    </article>
                    <h2 className='productName'>{product.title}</h2>
                    <div className='tools'>
                        <p className='productArticle'>арт. 371431</p>
                        <p className='share'><ShareTwoToneIcon /> <span>Поделиться</span></p>
                        <p className='interest'><FavoriteBorderTwoToneIcon /><span>В избраное</span></p>
                    </div>
                </div>
                <MainCard product={product} />
                <section className='interestItems'>
                    <h2 className='sectionName'>С этим товаров мокупают</h2>
                    <div className="interestItems__Wrapper">
                        {
                            interest
                                .filter(el => el.category == 'Молоко' || 'блины')
                                .slice(0, 4)
                                .map((item, idx) => (
                                    <div key={item.id} className="interestItem">
                                        <Link onClick={window.location.reload} to={`/single/${item.id}`}>
                                            <img src={`/${item.image}`} alt="" />
                                        </Link>
                                        <a href='' className='addInterest'><FavoriteBorderTwoToneIcon /></a>
                                        <article className='itemDiscription'>
                                            <h3 className='price'>{item.price}</h3>
                                            <p>{item.title}</p>
                                            <button className='addBasket' type='button'>В корзину</button>
                                        </article>
                                    </div>
                                ))
                        }
                    </div>
                </section>
                <section className='saleItems'>
                    <h2 className='sectionName'>Акции <span>Все акции<ArrowForwardIosIcon /></span></h2>
                    <div className='saleItems__Wrapper'>
                        {
                            interest
                                .filter(el => el.sale === true)
                                .slice(0, 4)
                                .map((item, idx) => (
                                    <div key={item.id} className="saleItem">
                                        <Link onClick={window.location.reload} to={`/single/${item.id}`}>
                                            <img src={`/${item.image}`} alt="" />
                                            <span className='sale'>-50%</span>
                                        </Link>
                                        <a href='' className='addInterest'><FavoriteBorderTwoToneIcon /></a>
                                        <article className='itemDiscription'>
                                            <h3 className='price'>{item.price}</h3>
                                            <p>{item.title}</p>
                                            <button className='addBasket' type='button'>В корзину</button>
                                        </article>
                                    </div>
                                ))
                        }
                    </div>
                </section>
            </div>
        </section>
    );
};

export default SingleCard;