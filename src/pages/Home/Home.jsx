import React,{useEffect,useState} from 'react';
import axios from "axios";
import Card from '../../Components/Card/Card'
import './Home.scss'
import banner from './Sliders.png'


const Home = () => {
    useEffect(()=>{
        axios("http://localhost:8080/product")
            .then(({data})=>setProduct(data))
    },[])
    const [product,setProduct] = useState([])

        const [all,setAll] = useState(false)



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
                        all?   product.filter((el)=>el.status==='sale')
                            .map((el)=>(
                                <Card el={el}/>
                            ))
                            :
                            product.filter((el)=>el.status==='sale')
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
                    <p className='all'>Все новинки</p>
                </div>
                <div className='home__cards'>
                    {
                        product.filter((el)=>el.status==='new')
                            .map((el)=>(
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