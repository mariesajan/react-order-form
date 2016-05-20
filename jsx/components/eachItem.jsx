import React from "react";

export default class EachItem extends React.Component{
  static propTypes= {
    itemKey: React.PropTypes.number.isRequired,
    itemName: React.PropTypes.string.isRequired,
    itemPrice: React.PropTypes.number.isRequired,
    setTotal: React.PropTypes.func.isRequired
  };
  constructor(props){
    super(props);
    this.state= {selected: false};
  }
  clickRow(){
    let { selected } = this.state;
    let { itemPrice } = this.props;
    this.setState({selected: !selected}, function(){
      this.props.setTotal(this.state.selected, itemPrice);
    });

  }
  render(){
    let styleClass, { selected } = this.state;
    var selectedRow = {
      backgroundColor: "#00d8ff"
    };
    var unselectedRow = {
      backgroundColor: "white"
    }
    selected ? (styleClass = selectedRow) : (styleClass= unselectedRow);
    return(
      <tr  key={this.props.itemKey} style={styleClass} onClick={this.clickRow.bind(this)}>
        <td> {this.props.itemName}</td>
        <td> $ {this.props.itemPrice}</td>
      </tr>
    );
  }
}
