import React from "react"
import Product from "../Product/Product"


export default class Dashboard extends React.Component{
render(){
    const {List} =this.props 
    const mapEvents = List.map((List, index) => {
        return ( 
        <div>
            Dashboard
            <Product
            list={List}
            name={List.name}
            price={List.price}
            imgurl={List.imgurl}
            key={index}
            delete={this.props.delete}
            id={this.props.id}
            />
        </div>)
    })
       return(
            <div>
                {mapEvents}
            </div>
        );
    }
}