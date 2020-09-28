import React from 'react';

const Cart = (props) => {
  const countryList = props.addCountry;
  
  //use reduce
  const totalPopulation = countryList.reduce((sum,countryList) => sum + countryList.population, 0)
 
  //*****USE FOR LOOP******
  // let totalPopulation = 0;
  // for (let i = 0; i < countryList.length; i++) {
  //   const country = countryList[i];
  //   totalPopulation = totalPopulation + country.population
  // }

  return (
    <div>
      <h3>Country added: {countryList.length}</h3>
  <p><small>Total Population:{totalPopulation}</small></p>
    </div>
  );
};

export default Cart;