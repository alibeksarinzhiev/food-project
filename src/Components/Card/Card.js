import React from 'react';
import { Link } from 'react-router-dom';
<<<<<<< HEAD
import { useDispatch, useSelector } from "react-redux";
import { setProduct } from '../../redux/reducer/cart'
import { addFavorite } from '../../redux/reducer/favourite'
=======
import {useDispatch, useSelector} from "react-redux";
import {setProduct} from '../../redux/reducer/cart'
import {addFavorite} from '../../redux/reducer/favourite'
import {AiOutlineHeart} from 'react-icons/ai'
>>>>>>> 6634ddc0044936d3a75f9c15961d3d436c2ba4c9

import './Card.scss'

const Card = ({ el }) => {


    const dispatch = useDispatch()

<<<<<<< HEAD
    const { data } = useSelector((state) => state.products)

=======
    const {data} = useSelector(state=>state.cart)

    const fav = useSelector(state=>state.favourite)



    
>>>>>>> 6634ddc0044936d3a75f9c15961d3d436c2ba4c9
    return (
        <div key={el.id} className='card'>
            <Link to={`/single/${el.id}`}>
                <img src={el.image} alt="" />
            </Link>
            <div className='card__price'>
                <h2 className='card__card'>{el.price} <br />
                    <span>
                        {el.paymentcard}
                    </span>
                </h2>
                <p className='card__cash'>{el.withoutsale} <br />
                    <span>
                        {el.paymentcash}
                    </span>
                </p>
            </div>
            <p className='card__text'>{el.title}</p>

<<<<<<< HEAD
            <button className={`${data.findIndex((item) => item.id === el.id) > -1 ? 'btnadded' : 'btnadd'}`} onClick={() => dispatch(setProduct(el))}>В корзину</button>
            {
                el.sale ? <div className='card__sale'> 50% </div> : ''
            }
            {/* <img alt='image/fav.png' src='' className='fav'/> */}
            <img onClick={() => dispatch(addFavorite(el))} src={el.fav} alt="" className='fav' />
=======
            <button className={`${data.findIndex((item)=>item.id === el.id) > -1? 'btnadded':'btnadd'}`} onClick={()=>dispatch(setProduct(el))}>В корзину</button>
                {
                el.sale ? <div className='card__sale'> 50% </div>: ''
                }
                    {/* <img alt='image/fav.png' src='' className='fav'/> */}



            <span className={`${fav.data.findIndex((item)=>item.id===el.id)>-1
            ?'card__checked' : 'card__heart'}`} onClick={()=>dispatch(addFavorite(el))}>
                <AiOutlineHeart/>
            </span>
>>>>>>> 6634ddc0044936d3a75f9c15961d3d436c2ba4c9
        </div>
    );
};

export default Card;