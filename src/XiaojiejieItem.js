import React,{Component,Fragment} from 'react'
import PropTypes from 'prop-types'
class XiaojiejieItem extends Component {
    state = {  }
    //满足条件 1.我们的组件第一次存于虚拟dom中函数是不会执行的.2.如果存在于dom中函数才会被执行

    // componentWillReceiveProps(){
    //     console.log('componentWillReceiveProps')
    // }
    // componentWillUnmount(){
    //     console.log('componentWillUnmount---组件删除')
    // }


    // 组件优化避免多次执行render()
    shouldComponentUpdate(nextProps,nextState){
        
        // if(nextProps.content!==this.props.content){
        //     console.log(nextProps,this.props.content);
        //     return true
        // }else{
        //     return false;
        // }
        console.log(nextProps.content === this.props.content);
        return nextProps.content !== this.props.content
    }
    render() { 
        console.log('child-render');
        return ( 
            <Fragment>
            <li
                onClick={this.handleClick.bind(this)}
            >{this.props.avname}为你服务{this.props.content}
            </li>
            </Fragment>
         );
    }
    handleClick(){
      console.log(this.props)
      this.props.deleteItem(this.props.index)
    }
}
XiaojiejieItem.propTypes = {
    content:PropTypes.string,
    index:PropTypes.number,
    deleteItem:PropTypes.func,
    avname:PropTypes.string.isRequired
}
XiaojiejieItem.defaultProps = {
    avname:'松岛枫'
}
export default XiaojiejieItem;