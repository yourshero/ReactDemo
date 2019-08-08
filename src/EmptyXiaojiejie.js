import React, { Component } from 'react';

class EmptyXiaojiejie extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <button
                    onClick={this.emptyClick.bind(this)}
                >清空
                </button>
            </div>
         );
    }
    emptyClick(){
        this.props.emptyItem();
    }
}
 
export default EmptyXiaojiejie;