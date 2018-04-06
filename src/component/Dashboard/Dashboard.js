import React, { Component } from 'react';
import Product from '../Product/Product';


class Dashboard extends Component {
  render() {
      let products=this.props.inventory.map((e,i)=>{
          return(<Product key={i} name={e.name} price={e.price} image={e.image}/>)
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
