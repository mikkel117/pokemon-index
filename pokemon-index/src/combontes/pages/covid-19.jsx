import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

export default function Covid19() {
  const { register, handleSubmit, errors } = useForm();
  const [apiData, setApiData] = useState(null);
  const [search, setSearch] = useState(false);
  const [country, setCountry ] = useState('')
  useEffect(() => {
    if (search === true) {
      if (!apiData) {
        const fetchHeaders = new Headers();
        fetchHeaders.append('Accept', 'application/json');
        fetchHeaders.append('x-rapidapi-host', 'covid-19-coronavirus-statistics.p.rapidapi.com');
        fetchHeaders.append('x-rapidapi-key', 'aee2130728mshc250038c75dd0d2p181ea1jsn58e75ec5d280');

        fetch(`https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/stats?country=${country}`, {
          method: 'GET',
          headers: fetchHeaders,
          redirect: 'follow',
        })
          .then((res) => res.json())
          .then((data) => {
            setApiData(data);
          })
          .catch((err) => {
            console.log(err);
          });
      }
      console.log('Covid-19', apiData && apiData.data.covid19Stats);
    }
  });

  const onSubmit = (data) => {
    
    console.log(data);
    setCountry(data.pokemon)
    setSearch(true)
  };

  return (
    <section>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="username">søg:</label> <br />
        <input
          type="text"
          placeholder="søg pokemon"
          name="pokemon"
          ref={register({
            required: 'der skal være et User name',
          })}
        />
        <input type="submit" value="Login" className="login-submit" />
        <br/>
         {errors.pokemon && <mark> {errors.pokemon.message} </mark>}
         </form>
         {search ? (
        <div>
{apiData &&
          apiData.data.covid19Stats.slice(0,10).map((results) => {
            return (
              <div key={results.keyId}>
                <h2>{results.country}</h2>
                <p>{results.province}</p>
                <p>{results.confirmed}</p>
                <p>{results.deaths}</p>
              </div>
            );
          })}
        </div>
      ) : (
        <></>
      )}
        
      
    </section>
  );
}
