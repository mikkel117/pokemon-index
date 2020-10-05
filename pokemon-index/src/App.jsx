import React from 'react';
import './App.scss';
import Placeholder from './combontes/pages/pokemon';
import HomeFetchProvider from './context/homeFetch';

function App() {
  return (
    <section className="App">
      <HomeFetchProvider>
        <Placeholder />
      </HomeFetchProvider>
    </section>
  );
}

export default App;
