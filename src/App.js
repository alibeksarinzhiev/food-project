import React from 'react';
import { Route ,Routes } from 'react-router-dom';
<<<<<<< HEAD
import Home from "./pages/Home/Home"
import './App.scss'
import Layout from './Layout/Layout';
import SingleCard from './pages/SingleCardPage/SingleCard';
import Catalog from './pages/Catalog/Catalog';
import Basket from './pages/Basket/Basket';
=======
>>>>>>> 5f4fd0c7c8010a201c116d5ec2d373305b953d61

import Home from "./pages/Home/Home"
import Layout from './Layout/Layout';
import Catalog from './pages/Catalog/Catalog'
import SingleCard from './pages/SingleCardPage/SingleCard';
import Favourite from './pages/Favourite/Favourite'

import './App.scss'

const App = () => {

    return (
        <>

            <Routes>
                <Route path='/' element={<Layout/>}>
                    <Route path='' element={<Home/>}/>
                    <Route path='single/:id' element={<SingleCard/>}/>
                    <Route path='catalog' element={<Catalog/>}/>
<<<<<<< HEAD
                    <Route path='basket' element={<Basket/>}/>
=======
                    <Route path='favourite' element={<Favourite/>}/>
>>>>>>> 5f4fd0c7c8010a201c116d5ec2d373305b953d61
                    <Route/>
                    <Route/>
                </Route>
            </Routes>

        </>
    );
};

export default App;