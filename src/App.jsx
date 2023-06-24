import React, { useEffect } from 'react'
import { fetchDataFromApi } from './utils/api'

const App = () => {
     useEffect(() => {
          apiTesting();
     }, [])

     const apiTesting = async () => {
          const res = await fetchDataFromApi("/movie/popular")
          console.log(res)
     }
     return (
          <div>
          </div>
     )
}

export default App
