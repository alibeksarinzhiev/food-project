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
                    <h2>Акции</h2>
                    <p>Все акции</p>
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