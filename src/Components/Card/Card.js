import React from 'react';
import { Link } from 'react-router-dom';
import './Card.scss'
import {useDispatch, useSelector} from "react-redux";
import {setProduct} from '../../redux/reducer/cart'
import {addFavorite} from '../../redux/reducer/favourite' 


const Card = ({el}) => {


    const dispatch = useDispatch()

    const {data} = useSelector(state=>state.cart)
    
    return (
        <div key={el.id} className='card'>
            <Link to={`/single/${el.id}`}>
                <img src={el.image} alt=""/>
            </Link>
            <div className='card__price'>
                <h2 className='card__card'>{el.price} <br/>
                <span>
                    {el.paymentcard}
                </span>
                </h2>
                <p className='card__cash'>{el.withoutsale} <br/>
                    <span>
                    {el.paymentcash}
                </span>
                </p>
            </div>
            <p className='card__text'>{el.title}</p>
            <button onClick={()=>dispatch(setProduct(el))}>В корзину</button>


                {el.sale ?
                    <div className='card__sale'>50%</div>
                    : ''}
                    {/* <img alt='image/fav.png' src='' className='fav'/> */}
                    <img onClick={() => dispatch(addFavorite(el))} src={el.fav}  alt="" className='fav'/>

        </div>
    );
};

export default Card;