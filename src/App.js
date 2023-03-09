import React from 'react';
import { Route ,Routes } from 'react-router-dom';
import Home from "./pages/Home/Home"
import './App.scss'
import Layout from './Layout/Layout';
import SingleCard from './pages/SingleCardPage/SingleCard';


const App = () => {

    return (
        <>
<<<<<<< HEAD
<Header/>

=======
            <Routes>

                <Route path='/' element={<Layout/>}>
                    <Route path='' element={<Home/>}/>
                    <Route path='single' element={<SingleCard/>}/>
                    <Route/>
                    <Route/>
                    <Route/>
                    <Route/>
                </Route>
            </Routes>
>>>>>>> b3b61704530f840b03e0a200102a37991e0a230a
        </>
    );
};

export default App;