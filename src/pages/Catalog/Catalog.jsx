import React from 'react';
import './Catalog.scss'

const Catalog = () => {
    return (
        <div className='catalog'>
            <h2>Каталог</h2>
            <div className="catalog__cards">
                <div className="catalog__card">
                <img src="./Images/img.png" alt="" />
                <p className="catalog__p">Молоко, сыр, яйцо</p>
                </div>
                <div className="catalog__card">
                <img src="./Images/img (1).png" alt="" />
                <p className="catalog__p">Хлеб</p>
                </div>
                <div className="catalog__card">
                <img src="./Images/img (2).png" alt="" />
                <p className="catalog__p">Фрукты и овощи</p>
                </div>
                <div className="catalog__card">
                <img src="./Images/img (3).png" alt="" />
                <p className="catalog__p">Замороженные продукты</p>
                </div>
                <div className="catalog__card">
                <img src="./Images/img (4).png" alt="" />
                <p className="catalog__p">Напитки</p>
                </div>
                <div className="catalog__card">
                <img src="./Images/img (5).png" alt="" />
                <p className="catalog__p">Кондитерские изделия</p>
                </div>
                <div className="catalog__card">
                <img src="./Images/img (6).png" alt="" />
                <p className="catalog__p">Чай, кофе</p>
                </div>
                <div className="catalog__card">
                <img src="./Images/img (7).png" alt="" />
                <p className="catalog__p">Бакалея</p>
                </div>
                <div className="catalog__card">
                <img src="./Images/img (8).png" alt="" />
                <p className="catalog__p">Здоровое питание</p>
                </div>
                <div className="catalog__card">
                <img src="./Images/img (9).png" alt="" />
                <p className="catalog__p">Зоотовары</p>
                </div>
                <div className="catalog__card">
                <img src="./Images/img (10).png" alt="" />
                <p className="catalog__p">Детское питание</p>
                </div>
                <div className="catalog__card">
                <img src="./Images/img (11).png" alt="" />
                <p className="catalog__p">Мясо, птица, колбаса</p>
                </div>
                <div className="catalog__card">
                <img src="./Images/img (12).png" alt="" />
                <p className="catalog__p">Непродовольственные товары</p>
                </div>

            </div>
        </div>
    );
};

export default Catalog;