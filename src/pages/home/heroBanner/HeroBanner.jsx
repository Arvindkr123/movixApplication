import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './style.scss'
import useFetch from '../../../hooks/useFetch';
import { useSelector } from 'react-redux';
import Img from '../../../components/lazyloadimages/img';
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper';

const HeroBanner = () => {
    const navigate = useNavigate();
    const [background, setBackground] = useState('')
    const [query, setQuery] = useState('')
    const { data, loading } = useFetch("/movie/upcoming")
    console.log('from hero banner', data)
    const { url } = useSelector(state => state.home)

    useEffect(() => {
        const bg = url.backdrop + data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
        setBackground(bg)
    }, [data])
    const searchQueryHandler = (event) => {
        if (event.key === "Enter" && query.length > 0) {
            navigate(`/search/${query}`)
            setQuery("")
        }
    }

    return (
        <div className="heroBanner">
            {!loading && <div className="backdrop-img">
                <Img src={background} />
            </div>}
            <div className="opacity-layer">
            </div>
            <ContentWrapper>
                <div className="heroBannerContent">
                    <span className="title">Welcome.</span>
                    <span className="subtitle"> Millions of movies, TV shows and people to discover.Explore now.</span>
                    <div className="searchInput">
                        <input value={query} onChange={(e) => setQuery(e.target.value)} type="text" placeholder='search for movie or tv show' onKeyUp={searchQueryHandler} />
                        <button>Search</button>
                    </div>
                </div>
            </ContentWrapper>
        </div>
    )
}

export default HeroBanner
