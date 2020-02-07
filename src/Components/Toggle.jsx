import React,{Component} from 'react';
import ReactDOM from 'react-dom';


export default class Toggle extends Component{
 constructor(props){
     super(props);
     this.state={isToggle:true};
    this.handleClick=this.handleClick.bind(this);
 }

 handleClick(){
     this.setState(state=>({isToggle:!state.isToggle}));
 }

 render(){
     return(
         <button onClick={this.handleClick}>
          {this.state.isToggle?'ON':'OFF'}
          </button>
     )
 }
}

