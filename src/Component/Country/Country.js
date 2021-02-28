import React from 'react';
const Country = (props) => {
    const{name, population, region, flag} = props.country;
    // console.log(props);  
    const flagstyle ={height: '50px'}
    const countyStyle ={border: '2px solid red', margin:'10px', padding:'10px', backgroundColor: 'lightsalmon'} 
    const handlerAddCountry = props.handlerAddCountry;

    return (
        <div style={countyStyle}>
           <h4>this is {name} </h4>
           <img style={flagstyle} src ={flag} alt="" />
  <p>population: {population}</p> 
           <p><small>Region: {region}</small></p>
        <button onClick={() => handlerAddCountry(props.country)}>Add Country</button>
        </div>
        
    );
};

export default Country;
