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
    console.log(apiData && apiData.results);
  });

  const apiDataMap =
  apiData &&
  apiData.results.map((result) => {
    return <p key={result.url}>
      {result.name}
    </p>;
  });

  return <div>{apiDataMap}</div>;
}


export default function Pokemon() {
  return (
    <section>
      <Fetch />
    </section>
  );
}
