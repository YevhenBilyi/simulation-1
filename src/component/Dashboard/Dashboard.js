import React, { Component } from 'react';
import Product from '../Product/Product';
import './Dashboard.css'


class Dashboard extends Component {
  render() {
      let products=this.props.inventory.map((e,i)=>{
          return(<Product key={i} name={e.name} price={e.price} image={e.img}/>)
      })
    return (
      <div className="Dashboard">
        Dashboard
        
        {products}
      </div>
    );
  }
}

export default Dashboard;
