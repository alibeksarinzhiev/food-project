import React,{useEffect,useState} from 'react';
import axios from "axios";
import Card from '../../Components/Card/Card'
import './Home.scss'


const Home = () => {
    useEffect(()=>{
        axios("http://localhost:8080/product")
            .then(({data})=>setProduct(data))
    },[])
    const [product,setProduct] = useState([])


    return (
        <section className='home' style={{background:'#FBF8EC'}}>
            <div className="container">
                <div className='home__sale'>
                    <h2 className='first'>Акции</h2>
                    <p className='all'>Все акции</p>
                </div>
                <div className='home__cards'>
                    {
                        product
                            .map((el)=>(
                            <Card el={el}/>
                        ))
                    }
                </div>
                <div className='home__new'>
                    <h2 className='first'>Новинки</h2>
                    <p className='all'>Все новинки</p>
                </div>
                <div className='home__cards'>
                    {
                        product.map((el)=>(
                            <Card el={el}/>
                        ))
                    }
                </div>
                <div className='home__prev'>
                    <h2 className='first'>Покупали раньше</h2>
                    <p className='all'>Все покупки</p>
                </div>
                <div className='home__cards'>
                    {
                        product.map((el)=>(
                            <Card el={el}/>
                        ))
                    }
                </div>
                
            </div>

        </section>
    );
};

export default Home;