import React from 'react';
import { Link } from 'react-router-dom';

import './catalog.scss'

const CatalogModal = () => {
    return (
        <div className='modalWrapper'>
            <div className="container">
                <article>
                    <Link>Молоко, сыр, яйцо</Link>
                    <Link>Хлеб</Link>
                    <Link>Фрукты и овощи</Link>
                    <Link>Замороженные продукты</Link>
                </article>
                <article>
                    <Link>Напитки</Link>
                    <Link>Кондитерские изделия</Link>
                    <Link>Чай, кофе</Link>
                </article>
                <article>
                    <Link>Бакалея</Link>
                    <Link>Здоровое питание</Link>
                    <Link>Зоотовары</Link>
                </article>
                <article>
                    <Link>Непродовольственные товары</Link>
                    <Link>Детское питание</Link>
                    <Link>Мясо, птица, колбаса</Link>
                </article>
            </div>
        </div>
    );
};

export default CatalogModal;