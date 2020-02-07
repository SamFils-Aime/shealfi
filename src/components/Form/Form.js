import React from "react"
import axios from "axios"

export default class Form extends React.Component{
    constructor(){
        super()
        this.state={
            name:"",
            price: 0 ,
            imgurl:""
        }
this.addList=this.addList.bind(this)
    }
handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
}
cancelChange = () =>{
    this.setState({
        name:'',
        price: 0 ,
        imgurl:''
    })
}
addID=()=>{
    this.setState({id: this.props.id*this.props.key})
}
addList = () => {
    axios
      .post("/api/inventory", this.state)
      .then(res => this.props.updateList(res.data))
      .catch(err => console.log(err));
  };
  componentDidUpdate(){

  }

    render(){
        return ( <div>Form
            <img src="" alt="product"></img>
            <input onChange= {this.handleChange}></input >
            <input onChange= {this.handleChange}></input >
            <input onChange= {this.handleChange}></input>
            <button onClick={this.addList}>add</button>
            <button onClick={this.cancelChange}>cancel</button>
        </div>)
    }
}