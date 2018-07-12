import React, { Component } from 'react';
import './Product.css';

class App extends Component {
  render() {
    return (
       <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
         <div className="thumbnail">
           <img alt="iphone" src={this.props.image} className="fixed_img"/>
           <div className="caption">
             <h3>{ this.props.name}</h3>
             <p>
               {this.props.price} VNĐ
             </p>
             <p>
               <a className="btn btn-success">Mua ngay</a>
             </p>
           </div>
         </div>
       </div>
    );
  }
}

export default App;
