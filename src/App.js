import React from 'react';
import { Route ,Routes } from 'react-router-dom';

import Home from "./pages/Home/Home"
import Layout from './Layout/Layout';
import Catalog from './pages/Catalog/Catalog'
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
                    <Route/>
                    <Route/>
                    <Route/>
                </Route>
            </Routes>

        </>
    );
};

export default App;