import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import './App.css';
import Table from './components/Table';
import Search from './components/Search';

class App extends Component {
  constructor(){
    super();
    this.state= {
      keyword:""
    }
  }
  onSearchChange(value) {
      this.setState({
        keyword:value
      });
  }
  render() {
    return (
      <div className="App">
      <div className='img1'> </div>
      <div className="container rest">

      <Search  className = "search "handleChange={this.onSearchChange.bind(this)}/>
      <hr/>
      <Table keyword={this.state.keyword}/>
      </div>
      </div>
    );
  }
}

export default App;
