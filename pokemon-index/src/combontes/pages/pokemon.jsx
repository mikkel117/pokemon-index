import React, { useEffect, useState } from 'react';

function Fetch() {
  const [apiData, setApiData] = useState(null);

  useEffect(() => {
    if (!apiData) {
      const fetchHeaders = new Headers();
      fetchHeaders.append('Accept', 'application/json');

      fetch('https://pokeapi.co/api/v2/pokemon', {
        method: 'GET',
        headers: fetchHeaders,
        redirect: 'follow',
      })
        .then((res) => res.json())
        .then((data) => {
          setApiData(data);
          //   setLoad(true);
        })
        .catch((err) => {
          console.log(err);
          //   setError(err.message);
          //   setLoad(true);
        });
    }
    console.log(apiData);
    
  });
}

export default function Pokemon() {
  return (
    <section>
      <Fetch />
    </section>
  );
}
