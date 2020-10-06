import React, {useEffect, useState} from 'react'

useEffect(() => {
    if (callApi === true){
    if (!pokemonData) {
      const fetchHeaders = new Headers();
      fetchHeaders.append('Accept', 'application/json');

      fetch(`https://api.covid19api.com/dayone/country/denmark`, {
        method: 'GET',
        headers: fetchHeaders,
        redirect: 'follow',
      })
        .then((res) => res.json())
        .then((data) => {
            setPokemonData(data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    console.log('pokemon data', pokemonData);
}
  });

export default function Covid19() {
    return (
        <section>
            
        </section>
    )
}
