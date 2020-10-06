import React, {createContext, useState, useEffect} from 'react'

export const HomeFetch = createContext()

const HomeFetchProvider = (props) => {
    const [homeData, setHomeData] = useState(null);

    useEffect(() => {
        if (!homeData) {
          const fetchHeaders = new Headers();
          fetchHeaders.append('Accept', 'application/json');
    
          fetch('https://pokeapi.co/api/v2/pokemon', {
            method: 'GET',
            headers: fetchHeaders,
            redirect: 'follow',
          })
            .then((res) => res.json())
            .then((data) => {
                setHomeData(data);
              //   setLoad(true);
            })
            .catch((err) => {
              console.log(err);
              //   setError(err.message);
              //   setLoad(true);
            });
        }
      });

    return(
        <HomeFetch.Provider value={{ homeData }}>
            {props.children}
        </HomeFetch.Provider>
    )
}

export default HomeFetchProvider;