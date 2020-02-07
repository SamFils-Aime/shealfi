import React from "react";

export default class product extends React.Component {
  render() {
    const { name, price, imgurl } = this.props;

    return (
      <div>
        <div>product</div>
        <img src={imgurl}/>
        <h1>{name}</h1>
        <p>{price}</p>
    <button onclick={this.props.delete}> delete</button>

      </div>
    );
  }
}
