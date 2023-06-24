import React, { useEffect } from 'react';
import { fetchDataFromApi } from './utils/api';
import { useDispatch, useSelector } from 'react-redux';
import { getApiConfiguration } from './store/HomeSlice';

const App = () => {
  const dispatch = useDispatch();
  const {url} = useSelector((state) => state.home);
  console.log(url)
  useEffect(() => {
    apiTesting();
  }, []);

  const apiTesting = async () => {
    const res = await fetchDataFromApi('/movie/popular');
    dispatch(getApiConfiguration(res));
    console.log(res);
  };
     return <div>
       {url?.total_pages}
  </div>;
};

export default App;
