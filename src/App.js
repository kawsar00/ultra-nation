import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Country from './Components/Country';
import Cart from './Components/Cart/Cart';

function App() {

  const [countries, setCountries] = useState([])
  const [addCountry, setAddCountry] = useState([])

  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
      .then(res => res.json())
      .then(data => setCountries(data))
  }, [])

  const handleAddCountry = (country) => {
    const newCart = [...addCountry, country]
    setAddCountry(newCart)
  }
  return (
    <div className="App">
      <h3>Country count: {countries.length}</h3>
      <h4>Country added:{addCountry.length}</h4>
      <Cart addCountry={addCountry}></Cart>
      <ul>
        {
          countries.map(country => <Country country={country} key={country.alpha3Code} handleAddCountry={handleAddCountry}></Country>)
        }
      </ul>
    </div>
  );
}

export default App;
