import React, {useEffect,useState} from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import {Link, NavLink, useNavigate} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import axios from "axios";
import './Catalog.scss'
import {animateScroll} from "react-scroll";


const Catalog = () => {
    const toTop = () => {
        animateScroll.scrollToTop({
            delay: 0,
            duration: 0
        })
    };
    const navigate = useNavigate()
    const [product, setProduct] = useState([])


    useEffect(()=>{
        axios("http://localhost:8080/listofCategory")
            .then(({data})=>(setProduct(data)))
    },[])

 

    return (
        <section className='catalog' style={{background: '#FBF8EC'}}>



            <div className="container">
                <div className="title">
                    <article>
                    <h3 onClick={()=>{navigate(-1)
                    toTop()}
                    }>Главная</h3>
                        <ArrowForwardIosIcon />
                        <h3>Каталог</h3>
                    </article>
                </div>
            <h2>Каталог</h2>
            <div className="catalog__cards">
{
              product.map((el)=>(
                  <div className='catalog__card'>
                      <img src={el.img} alt=""/>
                      <NavLink onClick={()=>toTop()} to={`${el.category}`}>
                  <p className='catalog__p'>{el.name}</p>
                      </NavLink>
                </div>

              ))
            }

            </div>
            </div>
           
        </section>
    );
};

export default Catalog;