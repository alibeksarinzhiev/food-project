import React from 'react';
import { Route ,Routes } from 'react-router-dom';


import Home from "./pages/Home/Home";
import Layout from './Layout/Layout';
import Basket from './pages/Basket/Basket';
import Catalog from './pages/Catalog/Catalog';
import Favourite from './pages/Favourite/Favourite'
import SingleCard from './pages/SingleCardPage/SingleCard';

import './App.scss'


const App = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Layout/>}>
                    <Route path='' element={<Home/>}/>
                    <Route path='single/:id' element={<SingleCard/>}/>
                    <Route path='catalog' element={<Catalog/>}/>
                    <Route path='basket' element={<Basket/>}/>
                    <Route path='favourite' element={<Favourite/>}/>
                    <Route/>
                    <Route/>
                </Route>
            </Routes>
        </>
    );
};

export default App;