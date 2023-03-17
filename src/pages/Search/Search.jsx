import React from 'react';
import './Search.scss'
import {useSelector} from "react-redux";
import Card from "../../Components/Card/Card";

const Search = () => {
    const {data,filter} = useSelector(state=>state.products)
    return (
        <section className='search'>
            <div className="container">
                <h2>Результаты поиска</h2>
                {
                   data.filter((el)=>el.title.toUpperCase().includes(filter.name.toUpperCase())).map((el)=>(
                       <Card el={el}/>
                   ))
                }
            </div>
        </section>
    );
};

export default Search;