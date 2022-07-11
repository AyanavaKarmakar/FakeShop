import React, { useEffect, useState } from 'react';
import './App.css';

/* Documentation */
// use react-router for routing to different pages

const App = () => {

  // https://fakestoreapi.com/products

  const [fake, setFake] = useState([]);
  console.log(fake);

  useEffect(() => {
    fakestore();
  }, [])

  const fakestore = async() => {
    const response = await fetch('https://fakestoreapi.com/products');
    // console.log(response);
    const jsonData = await response.json();
    // console.log(jsonData);
    setFake(jsonData);
  }

  // fakestore();

  return(
    <>
      <h2>FakeShop</h2>
        <div className="container">
        {fake.map((values) => {
          return(
            <>
              <div className='box'>
                <div className='content'>
                  <h5>{values.title}</h5>
                  <p>{values.description}</p>
                </div>
                  <img src={values.image} alt='Product Image'/>
              </div>
            </>
          );
        })}  
          
        </div>
        
    </>
  )
}

export default App
