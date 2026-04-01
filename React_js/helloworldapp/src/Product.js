import React from "react";
import data from "./data/products.json"

class Product extends React.Component{
    render(){
        return(
            <div>
                <h3>{this.props.title}</h3>
                <img src ={this.props.imageurl} width="100" height="100"/>
                <p>Description :{this.props.description} </p>
                <p> qunatity available : {this.props.quantity}</p>
                <p>Unit Price : {this.props.unitprice}</p>
                <p>likes: {this.props.likes}</p>
                <button>add to cart</button>
                <hr/>
            </div>
        )
    }
}

export default Product