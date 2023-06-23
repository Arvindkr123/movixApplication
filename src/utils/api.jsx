import axios from 'axios'

const baseURL = "https://api.themovie.db.org/3"

const TMDBToken = import.meta.env.VITE_APP_TMDB_TOKEN;

const headers = {
    Authoriazation: 'bearer',
    TMDBToken
}

export const fetchDatafromApi = async (url, params) => {
    try {
        const { data } = await axios.get(baseURL + url, {
            headers, params
        })
    } catch (err) {
        console.log(err)
    }
}