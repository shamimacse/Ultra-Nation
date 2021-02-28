import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { useEffect } from "react";
import Country from "./Component/Country/Country";
import Cart from "./Component/Cart/Cart";

function App() {
  const [countries, setCountries] = useState([]);
const [cart, setCart] = useState([]);

  //const [x,y] = ['abc' , 'edf'] (it is called distructuring value)
  //  const total = add (2,3);   //[doing return , 'abc', 'def']

  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all")
      .then((res) => res.json())
      .then((data) => setCountries(data))
      // console.log(data);
      // const names = data.map(country => country.name)
      // console.log(names);
      .catch((error) => console.log());
  }, []);
  const handlerAddCountry =(country) => {
    // console.log('country added',country)
    const newCart = [...cart, country];
  setCart(newCart);
  }
  return (
    <div className="App">
      <h1>country loaded: {countries.length}</h1>
      <h4>country Added: {cart.length}</h4>
      <Cart cart={cart}></Cart>
      <ul>
        {countries.map((country) => (
          <Country country={country} handlerAddCountry={handlerAddCountry} key={country.alpha3Code}></Country>
        ))}
      </ul>

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
