import React, { Component } from 'react';
import Dashboard from './component/Dashboard/Dashboard';
import Form from './component/Form/Form';
import Header from './component/Header/Header';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state={
      inventory:[]
    }
    this.componentDidMount=this.componentDidMount.bind(this);
  }
  componentDidMount(){
    axios.get('/api/inventory').then(res=>{
      console.log(res.data)
      this.setState({inventory:res.data})
      
    }).catch(error=>`Failed at getting data:${error}`)
  }
  render() {
    return (
      <div className="App">
      <div className="Header">
      <Header/>
      </div>
      <div className="Dashboard">
      <Dashboard inventory={this.state.inventory} refresh={this.componentDidMount}/>
      </div>
      <div className="Form">
      <Form refresh={this.componentDidMount}/>
      </div>
      

      </div>
    );
  }
}

export default App;
