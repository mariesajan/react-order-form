import React from "react";

export default class Total extends React.Component{
  static propTypes= {
    total: React.PropTypes.number.isRequired
  };
  render(){
    return(
      <tr style={{backgroundColor: "#ffb600"}}>
        <td>Total: </td>
        <td> $ {this.props.total} </td>
      </tr>
    );
  }
}
