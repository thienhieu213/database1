import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Product from './Components/Product';

class App extends Component {
  render() {
    var products = [
      {
        id: 1,
        name: 'Iphone X',
        price: '30.000.000',
        image: 'https://cdn.tgdd.vn/Products/Images/42/114115/iphone-x-64gb-1-400x460.png'
      },
      {
        id: 2,
        name: 'Samsung J7 Pro',
        price: '12.000.000',
        image: 'https://cdn4.tgdd.vn/Products/Images/42/103404/samsung-galaxy-j7-pro-hh-600x600.jpg'
      },
      {
        id: 3,
        name: 'Xiaomi node 7',
        price: '10.000.000',
        image: 'https://cdn.tgdd.vn/Products/Images/42/153953/xiaomi-redmi-note-5-pro-400x460.png'
      },
      {
        id: 4,
        name: 'Iphone X',
        price: '30.000.000',
        image: 'https://cdn.tgdd.vn/Products/Images/42/114115/iphone-x-64gb-1-400x460.png'
      }
    ];

    let elements = products.map((product,index) => {
        return <Product 
                  key = {index}
                  name = {product.name}
                  price = {product.price}
                  image = {product.image}
                />
    });
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            {elements}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
