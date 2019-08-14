import React,{Component,Fragment} from 'react'
import XiaojiejieItem from './XiaojiejieItem'
import EmptyXiaojiejie from './EmptyXiaojiejie'
class Xiaojiejie extends Component{
    constructor(props){
        super(props)
        this.state = {
            inputValue:'spa',
            list:['小姐姐1号','2']
        }
    }
    render(){
        return (
            <Fragment>
                {/* 注释 */}
              <div>
                  <label htmlFor='spa'>加入服务：</label>
                <input 
                        id='spa'
                        className='input' value={this.state.inputValue} onChange={this.inputChange.bind(this)}
                        ref = {(input) => {this.input=input}}        
                />
                <button onClick={this.addList.bind(this)}>增加服务</button>
                <ul ref = {(ul)=>{this.ul=ul}}>
                   {
                       this.state.list.map((item,index)=>{
                           return (
                           /* <li 
                                key={item+index}
                                onClick={this.deleteItem.bind(this,index)}
                                dangerouslySetInnerHTML={{__html:item}}
                           >
                           </li>
                          */ 
                                <XiaojiejieItem
                                    content={item}
                                    key={item+index}
                                    index={index}
                                    deleteItem={this.deleteItem.bind(this)}
                                    />
                           )
                       })
                   }
                </ul>
                <EmptyXiaojiejie emptyItem = {this.emptyItem.bind(this)}/>
              </div>
              
            </Fragment>
        )
    }
    emptyItem(){
        this.setState({
            list:[]
        })
    }
    inputChange(e){
        this.setState({
            inputValue:this.input.value
        })
    }
    addList(){
        this.setState({
            list:[...this.state.list,this.state.inputValue]
        },()=>{
            // console.log(this.ul.querySelectorAll('li').length);
        })
    }
    deleteItem(index){
        let list = this.state.list
        list.splice(index,1)
        this.setState({
            list:list
        })
    }
}

export default Xiaojiejie