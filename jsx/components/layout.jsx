import React from "react";
import EachItem from "./eachItem";
import Total from "./total";

var items= [
  {
    category: "Web Development",
    price: 300
  },
  {
    category: "Design",
    price: 400
  },
  {
    category: "Integration",
    price: 250
  },
  {
    category: "Training",
    price: 200
  }
];
export default class Layout extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      total: 0
    };
  }
  setTotal(ifSelected, price){
    let { total } = this.state;
    ifSelected ? ( total = total+price ) : ( total = total-price );
    this.setState({total: total});
  }
  render(){
    let { total } = this.state;
    var createCategory = function(item,index){
      return(
        <EachItem key={index} itemKey={index}  itemName={item.category}
          itemPrice={item.price} setTotal={this.setTotal.bind(this)} />
      );
    }.bind(this);
    return(
      <div>
        <h2>Our Services</h2>
        <table class="items">
          <tbody>
            {items.map(createCategory)}
            <Total total={total} />
          </tbody>
        </table>
      </div>
    );
  }
}
