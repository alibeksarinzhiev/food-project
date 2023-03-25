import React from 'react';
import { Route ,Routes } from 'react-router-dom';

import Home from "./pages/Home/Home";
import Layout from './Layout/Layout';
import Search from './pages/Search/Search';
import Basket from './pages/Basket/Basket';
import Catalog from './pages/Catalog/Catalog';
import LoginPage from './pages/Login/LoginPage';
import Favourite from './pages/Favourite/Favourite';
import RegisterPage from './pages/Register/RegisterPage';
import VacancyPage from './pages/VacancyPage/VacancyPage';
import SingleCard from './pages/SingleCardPage/SingleCard';
import ContactsPage from './pages/ContactsPage/ContactsPage';
import CatalogSinglePage from './pages/CatalogCard/CatalogSinglePage';

import './App.scss'


const App = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Layout/>}>
                    <Route path='' element={<Home/>}/>
                    <Route path='basket' element={<Basket/>}/>
                    <Route path='search' element={<Search/>}/>
                    <Route path='login' element={<LoginPage/>}/>
                    <Route path='catalog' element={<Catalog/>}/>
                    <Route path='vacancy' element={<VacancyPage/>}/>
                    <Route path='favourite' element={<Favourite/>}/>
                    <Route path='single/:id' element={<SingleCard/>}/>
                    <Route path='register' element={<RegisterPage/>}/>
                    <Route path='contacts' element={<ContactsPage/>}/>
                    <Route path='favourite' element={<Favourite/>}/>
                    <Route path='catalogSinglePage' element={<CatalogSinglePage/>}/>
                </Route>
            </Routes>
        </>
    );
};

export default App;