import React, { Component } from 'react';



class Form extends Component {
    constructor(){
        super();
        this.state={
            name:'',
            price:0,
            imgurl:''
        }
          this.clearInputs=this.clearInputs.bind(this);
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
  render() {
    return (
      <div className="Form">
        Form
        <input value={this.state.name} onChange={e=>this.handleName(e.target.value)} type='text'/>
        <input value={this.state.price} onChange={e=>this.handlePrice(e.target.value)} type='number'/>
        <input value={this.state.imgurl} onChange={e=>this.handleImage(e.target.value)} type='text'/>
        <button>Add to inventory</button>
        <button onClick={this.clearInputs}> Cancel </button>
      </div>
    );
  }
}

export default Form;
