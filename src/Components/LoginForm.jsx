import React,{Component} from 'react';
import ReactDOM from 'react-dom';


export default class LoginForm extends Component{
    constructor(props){
        super(props);
        this.state={UserName:'',Password:''} 
        this.handleUserName=this.handleUserName.bind(this);
        this.handlePassword=this.handlePassword.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
 
    handleUserName(event){
        this.setState({UserName:event.target.value});
    }
    
    handlePassword(event){
        this.setState({Password:event.target.value});
    }
    handleSubmit(event){
        alert("Login UserName " + this.state.UserName + " and Password " + this.state.Password);
        event.preventDefault();
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <lable>
                    Username:
                    <input type="text" value={this.state.UserName} onChange={this.handleUserName}/>
                </lable>
                <br/>
                     <lable>
                        Password:
                    <input Type="password" value={this.state.Password} onChange={this.handlePassword}/>
                    </lable>
                    <br/>
                    <input type="submit" onSubmit={this.handleSubmit}/>
             </form>
        );
    }
}