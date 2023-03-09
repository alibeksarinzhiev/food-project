import React, { useState } from 'react';
import ShareTwoToneIcon from '@mui/icons-material/ShareTwoTone';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import FavoriteBorderTwoToneIcon from '@mui/icons-material/FavoriteBorderTwoTone';
import NotificationsOffOutlinedIcon from '@mui/icons-material/NotificationsOffOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';

import './SingleCard.scss'

const SingleCard = () => {

    const [notify, setNotify] = useState(false)

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
                        <h3 className='articleProductName'>Масло ПРОСТОКВАШИНО сливочное в/с 82% фольга без змж, Россия, 180 г</h3>
                    </article>
                    <h2 className='productName'>Масло ПРОСТОКВАШИНО сливочное в/с 82% фольга без змж, Россия, 180 г</h2>
                    <div className='tools'>
                        <p className='productArticle'>арт. 371431</p>
                        <p className='share'><ShareTwoToneIcon /> <span>Поделиться</span></p>
                        <p className='interest'><FavoriteBorderTwoToneIcon /><span>В избраное</span></p>
                    </div>
                </div>
                <section className='cardWrapper'>
                    <div className="cardWrapper__itemLeftSide">
                        <img src='' alt='' className="leftItem" />
                        <img src='' alt='' className="leftItem" />
                        <img src='' alt='' className="leftItem" />
                        <img src='' alt='' className="leftItem" />
                        <img src='' alt='' className="leftItem" />
                        <div className="leftMainItem"><span className='sale'>-50%</span></div>
                    </div>
                    <div className='cardWrapper__itemDiscriptionSide'>
                        <div className="discriptionSide">
                            <article className='discriptionSide__pricePanel'>
                                <p className='price'>192,69 ₽</p>
                                <p className='greyReminder'>Обычная цена</p>
                                <h3 className='salePrice'>108,99 ₽</h3>
                                <p className='Reminder'>С картой Северяночки <span className=''>i</span></p>
                            </article>
                            <button className='addBasket'>
                                <span>
                                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.33337 28C7.33337 26.1591 8.82576 24.6667 10.6667 24.6667C12.5077 24.6667 14 26.1591 14 28C14 29.841 12.5077 31.3333 10.6667 31.3333C8.82576 31.3333 7.33337 29.841 7.33337 28ZM10.6667 26C9.56214 26 8.66671 26.8954 8.66671 28C8.66671 29.1046 9.56214 30 10.6667 30C11.7713 30 12.6667 29.1046 12.6667 28C12.6667 26.8954 11.7713 26 10.6667 26Z" fill="white" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M23.3334 28C23.3334 26.1591 24.8258 24.6667 26.6667 24.6667C28.5077 24.6667 30 26.1591 30 28C30 29.841 28.5077 31.3333 26.6667 31.3333C24.8258 31.3333 23.3334 29.841 23.3334 28ZM26.6667 26C25.5621 26 24.6667 26.8954 24.6667 28C24.6667 29.1046 25.5621 30 26.6667 30C27.7713 30 28.6667 29.1046 28.6667 28C28.6667 26.8954 27.7713 26 26.6667 26Z" fill="white" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M1.33329 0.666672C0.965103 0.666672 0.666626 0.965149 0.666626 1.33334C0.666626 1.70153 0.965103 2.00001 1.33329 2.00001H6.10731C7.11706 7.72197 8.13773 13.4191 8.99904 19.1611C9.2438 20.7929 10.6455 22 12.2955 22H25.8129C27.4018 22 28.7698 20.8785 29.0815 19.3204L31.0004 9.72557C31.2479 8.48799 30.3014 7.33334 29.0393 7.33334H9.54725C9.1433 7.33334 8.77059 7.45202 8.45911 7.65458L7.32315 1.21748C7.26693 0.89891 6.99012 0.666672 6.66663 0.666672H1.33329ZM8.88795 9.43223C8.82749 9.02916 9.13967 8.66667 9.54725 8.66667H29.0393C29.46 8.66667 29.7755 9.05155 29.693 9.46408L27.774 19.0589C27.587 19.9938 26.7662 20.6667 25.8129 20.6667H12.2955C11.3055 20.6667 10.4645 19.9424 10.3176 18.9634L8.88795 9.43223Z" fill="white" />
                                    </svg>
                                </span>

                                В корзину
                            </button>
                            <div className='notifyPanel'>
                                <article>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M23.1883 6.66661H0.811961C0.343143 6.66661 -0.0396916 7.05823 0.0033005 7.52051C0.494639 
                                13.0113 5.67826 17.3333 12.0001 17.3333C18.322 17.3333 23.5056 13.0133 23.997 7.52051C24.0379 7.05823 23.6571 6.66661 23.1883 6.66661Z"
                                            fill="#70C05B" />
                                    </svg>
                                    <p className='bonus'>Вы получаете 10 бонусов</p></article>
                                <article>
                                    {
                                        notify ? <NotificationsActiveOutlinedIcon /> : <NotificationsOffOutlinedIcon />
                                    }
                                    <p onClick={() => setNotify(!notify)}>Уведомить о снижении цены</p>
                                </article>
                            </div>
                            <article className='producedBy'>
                                <div>
                                    <p>Бренд</p>
                                    <p>Страна производителя</p>
                                    <p>Упаковка</p>
                                </div>
                                <div>
                                    <h4>ПРОСТОКВАШИНО</h4>
                                    <h4>Россия</h4>
                                    <h4>180 г</h4>
                                </div>
                            </article>
                        </div>

                        <div className='sameProductSide'>
                            <p>Похожие</p>
                            <article>
                                <img src="" alt="" />
                                <p>157,50</p>
                            </article>
                            <article>
                                <img src="" alt="" />
                                <p>157,50</p>
                            </article>
                            <article>
                                <img src="" alt="" />
                                <p>157,50</p>
                            </article>
                            <article>
                                <img src="" alt="" />
                                <p>157,50</p>
                            </article>
                        </div>
                    </div>
                </section>
                <section className='interestItems'>
                    <h2 className='sectionName'>С этим товаров мокупают</h2>
                    <div className="interestItems__Wrapper">
                        <div className="interestItem">
                            <img src="" alt="" />
                            <a href='' className='addInterest'><FavoriteBorderTwoToneIcon/></a>
                            <article className='itemDiscription'>
                                <h3 className='price'>77,99 ₽</h3>
                                <p>Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»</p>
                                <button className='addBasket' type='button'>В корзину</button>
                            </article>
                        </div>
                    </div>
                </section>
            </div>
        </section>
    );
};

export default SingleCard;