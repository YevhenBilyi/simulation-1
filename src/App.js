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
  }
  componentDidMount(){
    axios.get('/api/inventory').then(res=>{
      this.setState({inventory:res.data})
      .catch(error=>`Failed at getting data:${error}`)
    })
  }
  render() {
    return (
      <div className="App">
      <Dashboard inventory={this.state.inventory}/>
      <Form/>
      <Header/>

      </div>
    );
  }
}

export default App;
