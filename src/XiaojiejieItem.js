import React, { Component } from 'react';

class XiaojiejieItem extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
            <div
                onClick={this.handleClick.bind(this)}
            >{this.props.content}
            </div>
            </div>
         );
    }
    handleClick(){
      console.log(this.props)
      this.props.deleteItem(this.props.index)
    }
}
 
export default XiaojiejieItem;