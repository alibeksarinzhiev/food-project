import React, {useEffect,useState} from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import axios from "axios";
import './Catalog.scss'


const Catalog = () => {

  
    // const [product, setProduct] = useState([])



    // useEffect(()=>{
    //     axios("http://localhost:8080/listofCategory")
    //         .then(({data})=>(setProduct(data)))
    // },[])

    // console.log(data)

    return (
        <section className='catalog' style={{background: '#FBF8EC'}}>
            <div className="container">
                <div className="title">
                    <article>
                    <h3>Главная</h3>
                        <ArrowForwardIosIcon />
                        <h3>Каталог</h3>
                    </article>
                </div>
            <h2>Каталог</h2>
            <div className="catalog__cards">
                <div className="catalog__card">
                <img width='555px' height='200px' src="./Images/img.png" alt="" />
               <Link to={`/catalogSinglePage`}><p className="catalog__p">Молоко, сыр, яйцо</p></Link>
                </div>
                <div className="catalog__card">
                <img src="./Images/img (1).png" alt="" />
               <Link> <p className="catalog__p">Хлеб</p></Link>
                </div>
                <div className="catalog__card">
                <img src="./Images/img (2).png" alt="" />
               <Link> <p className="catalog__p">Фрукты и овощи</p></Link>
                </div>
                <div className="catalog__card">
                <img src="./Images/img (3).png" alt="" />
                <Link><p className="catalog__p">Замороженные продукты</p></Link>
                </div>
                <div className="catalog__card">
                <img src="./Images/img (4).png" alt="" />
                <Link><p className="catalog__p">Напитки</p></Link>
                </div>
                <div className="catalog__card">
                <img src="./Images/img (5).png" alt="" />
                <Link> <p className="catalog__p"> Кондитерские изделия</p></Link>
                </div>
                <div className="catalog__card">
                <img src="./Images/img (6).png" alt="" />
                <Link> <p className="catalog__p">Чай, кофе</p></Link>
                </div>
                <div className="catalog__card">
                <img src="./Images/img (7).png" alt="" />
                <Link><p className="catalog__p">Бакалея</p></Link>
                </div>
                <div className="catalog__card">
                <img src="./Images/img (8).png" alt="" />
                <Link> <p className="catalog__p">Здоровое питание</p></Link>
                </div>
                <div className="catalog__card">
                <img width='555px' height='200px'  src="./Images/img (9).png" alt="" />
                <Link><p className="catalog__p">Зоотовары</p></Link>
                </div>
                <div className="catalog__card">
                <img src="./Images/img (10).png" alt="" />
                <Link><p className="catalog__p">Детское питание</p></Link>
                </div>
                <div className="catalog__card">
                <img width='555px' height='200px'  src="./Images/img (11).png" alt="" />
                <Link><p className="catalog__p">Мясо, птица, колбаса</p></Link>
                </div>
                <div className="catalog__card">
                <img src="./Images/img (12).png" alt="" />
                <Link><p className="catalog__p">Непродовольственные товары</p></Link>
                </div>

            </div>
            </div>
        </section>
    );
};

export default Catalog;