import React, { Component } from 'react';
import axios from'axios';
import './Form.css'



class Form extends Component {
    constructor(){
        super();
        this.state={
            name:'',
            price:0,
            imgurl:''
        }
          this.clearInputs=this.clearInputs.bind(this);
          this.addProduct=this.addProduct.bind(this);
    }
  
    handleName(e){
        this.setState({name:e})
    }
    handlePrice(e){
        this.setState({price:e})
    }
    handleImage(e){
        this.setState({imgurl:e})
    }
    clearInputs(){
        this.setState({
            name:'',
            price:0,
            imgurl:''
        })
    }
    addProduct(){
        let product={
            name: this.state.name,
            price: this.state.price,
            imageurl: this.state.imgurl
        }
       
        axios.post("/api/product", product).then(res=>{
            this.props.refresh()
            this.clearInputs()
        }).catch((err)=>console.log("cannot post"+err))
    }
  render() {
    return (
      <div className="Form1">
      <div id='top'>
      <img src="" alt=""/>
        <p> Name:</p>
        <input value={this.state.name} onChange={e=>this.handleName(e.target.value)} type='text'/>
        <p> Price </p>
        <input value={this.state.price} onChange={e=>this.handlePrice(e.target.value)} type='number'/>
        <p> Image URL </p>
        <input value={this.state.imgurl} onChange={e=>this.handleImage(e.target.value)} type='text'/>
     </div>
        <button onClick={this.addProduct}>Add to inventory</button>
        <button onClick={this.clearInputs}> Cancel </button>
      </div>
    );
  }
}

export default Form;
