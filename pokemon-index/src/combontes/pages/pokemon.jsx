import React, { useContext} from 'react';
import {HomeFetch} from '../../context/homeFetch'


export default function Pokemon() {
    const {homeData} = useContext(HomeFetch)
  return (
    <section>
  <div>
      {homeData && homeData.results.map((results) =>{
          return(
              <p key={results.url}>
                  {results.name}
              </p>
          )
      })}
  </div>
    </section>
  );
}
