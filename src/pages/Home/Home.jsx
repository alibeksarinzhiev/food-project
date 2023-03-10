import React,{useEffect,useState} from 'react';
import axios from "axios";
import Card from '../../Components/Card/Card'
import './Home.scss'
import banner from './Sliders.png'
import { useSelector, useDispatch } from 'react-redux'
import {setAllProducts} from '../../redux/reducer/products'
import {useNavigate} from 'react-router-dom'



const Home = () => {
    const {data,filter} = useSelector((state)=>state.products)
    const dispatch = useDispatch()
    const navigate =useNavigate()

    useEffect(()=>{
        axios("http://localhost:8080/product")
            .then(({data})=>dispatch(setAllProducts(data)))
    },[])

    const [all,setAll] = useState(false)

    if (filter.name.length!==0){
        navigate('/search')
    }

    return (
        <section className='home' style={{background:'#FBF8EC'}}>
                <div className='home__banner'>
                    <img src={banner} alt=""/>
                </div>
            <div className="container">
                <div className='home__sale'>
                    <h2 className='first'>Акции</h2>
                    <p className='all' onClick={()=>setAll(!all)}>Все акции</p>
                </div>
                <div className='home__cards'>
                    {
                        all?   data.filter((el)=>el.status==='sale')
                            .map((el)=>(
                                <Card el={el}/>
                            ))
                            :
                            data.filter((el)=>el.status==='sale')
                                .slice(0,4)
                                .map((el)=>(
                                    <Card el={el}/>
                                ))
                    }
                    {

                    }
                </div>
                <div className='home__new'>
                    <h2 className='first'>Новинки</h2>
                    <p className='all' onClick={()=>setAll(!all)}>Все новинки</p>
                </div>
                <div className='home__cards'>
                {
                        all?   data.filter((el)=>el.status==='new')
                            .map((el)=>(
                                <Card el={el}/>
                            ))
                            :
                            data.filter((el)=>el.status==='new')
                                .slice(0,4)
                                .map((el)=>(
                                    <Card el={el}/>
                                ))
                    }
                  
                </div>
                <div className='home__prev'>
                    <h2 className='first'>Покупали раньше</h2>
                    <p className='all' onClick={()=>setAll(!all)}>Все покупки</p>
                </div>
                <div className='home__cards'>
                {
                        all?   data.filter((el)=>el.status==='prev')
                            .map((el)=>(
                                <Card el={el}/>
                            ))
                            :
                            data.filter((el)=>el.status==='prev')
                                .slice(0,4)
                                .map((el)=>(
                                    <Card el={el}/>
                                ))
                    }
                </div>
                
            </div>








        </section>
    );
};

export default Home;