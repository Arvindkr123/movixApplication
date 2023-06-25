import React, { useEffect } from 'react';
import { fetchDataFromApi } from './utils/api';
import { useDispatch, useSelector } from 'react-redux';
import { getApiConfiguration } from './store/HomeSlice';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Details from './pages/details/Details';
import SearchResult from './pages/searchResult/SearchResult';
import Explore from './pages/explore/Explore';
import Pages404 from './pages/404/404';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';


const App = () => {
    const dispatch = useDispatch();
    const { url } = useSelector((state) => state.home);
    console.log(url)
    useEffect(() => {
        fetchApiConfig();
    }, []);

    const fetchApiConfig = async () => {
        const res = await fetchDataFromApi('/configuration');
        const url = {
            backdrop: res.images.secure_base_url + "original",
            poster: res.images.secure_base_url + "original",
            profile: res.images.secure_base_url + "original",
        }
        dispatch(getApiConfiguration(url));
        console.log('url', url)
    };
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/:mediaType/:id' element={<Details />}></Route>
                <Route path='/search/:query' element={<SearchResult />}></Route>
                <Route path='/explore/:mediaType' element={<Explore />}></Route>
                <Route path='*' element={<Pages404 />}></Route>
            </Routes>
            <Footer/>
        </BrowserRouter>
    );
};

export default App;
