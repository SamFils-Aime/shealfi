import React from 'react';
import './App.css';
import Dashboard from "./components/Dashboard/Dashboard"
import Form from "./components/Form/Form"
import Header from "./components/Header/Header"
import axios from "axios"


class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
    id:0, 
    data : []
  }
  
}

  componentDidMount() {
    axios
      .get("/api/inventory")
      .then(res => this.setState({ data: res.data }))
      .catch(err => console.log(err));
  }
  clickDelete = () => {
    axios
      .delete(`/api/inventory/${this.state.data.id}`)
      .then(res => this.props.updateList(res.data))
      .catch(err => console.log(err));}


  render(){
  return (
    <div className="App">
     <Dashboard List={this.state.data} id={this.state.id} delete={this.delete}/>
     <Form/>
     <Header/>
    </div>
  );
  }
}

export default App;
