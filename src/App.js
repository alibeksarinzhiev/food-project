import React from 'react';
import { Route ,Routes } from 'react-router-dom'; 

import Header from "./Layout/Header/Header";
import Home from "./pages/Home/Home"

import './App.scss'
import Layout from './Layout/Layout';
import SingleCard from './pages/SingleCardPage/SingleCard';


const App = () => {
    return (
        <>
            <Routes>
                 <Route path='/' element={<Layout/>}>
                    <Route path=''element={<Home/>}/>
                    <Route path='single' element={<SingleCard/>}/>
                    <Route/>
                    <Route/>
                    <Route/>
                    <Route/>
                </Route>
            </Routes>
        </>
    );
};

export default App;