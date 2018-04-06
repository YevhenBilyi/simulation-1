import React, { Component } from 'react';
import Product from '../Product/Product';
import axios from 'axios';
import './Dashboard.css'


class Dashboard extends Component {
  constructor(){
    super();
    this.deleteProduct=this.deleteProduct.bind(this);
  }

  deleteProduct(id){
    axios.delete(`/api/product/${id}`).then(res=>{
      this.props.refresh()
    })
  }
  render() {
      let products=this.props.inventory.map((e,i)=>{
          return(<Product key={i} id={e.id} name={e.name} price={e.price} image={e.img}
          delete={this.deleteProduct}/>)
      })
    return (
      <div className="Dashboard">
    
        
        {products}
      </div>
    );
  }
}

export default Dashboard;
