import React from 'react';

const Country = (props) => {
  // console.log(props.country);
  const { name, flag, population, capital } = props.country
  const imageStyle = { width: '80px' }
  const countryStyle = { border: '1px solid gray', marginBottom: '10px', padding:'20px' }
  return (
    <div style={countryStyle}>
      <h3>{name}</h3>
      <img style={imageStyle} src={flag} alt="" />
      <p>Population: {population}</p>
      <p>City: {capital}</p>
      <button onClick={() => props.handleAddCountry(props.country)}>Add Country</button>
    </div>
  );
};

export default Country;