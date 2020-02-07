import React,{Component} from 'react';
import ReactDOM from 'react-dom';



export default class Login extends Component{
  constructor(props){
      super(props);
      this.handleLoginClick=this.handleLoginClick.bind(this);
      this.handleLogoutClick=this.handleLogoutClick.bind(this);
      this.state={isLoggedIn:false}
  }
  handleLoginClick(){
   this.setState({isLoggedIn:true});
  }
  handleLogoutClick(){
     this.setState({isLoggedIn:false});
  }
     render(){
         const isLoggedIn=this.state.isLoggedIn;
         let button;
      
        //  if(isLoggedIn)
        //  {
        //      button=<LogoutButton onClick={this.handleLogoutClick}/>
        //  }
        //  else{
        //      button=<LoginButton onClick={this.handleLoginClick}/>
        //  }

        // return(
        //     <div>
        //         <Greeeting isLoggedIn={isLoggedIn}/>
        //         {button}
        //         </div>
        // );

        return(
          <div>
              {isLoggedIn?
         (
             button=<LogoutButton onClick={this.handleLogoutClick}/>
             ):(
                 button=<LoginButton onClick={this.handleLoginClick}/>)
         }
              </div>
        );

     }          
  
}
function LoginButton(props)
{
    return(
        <button onClick={props.onClick}>
            Login
            </button>
    )

}
function LogoutButton(props)
{
    return(
        <button onClick={props.onClick}>
            Logout
            </button>
    )
}
function UserGreeting(props){
    return <h1> Please Login </h1>
}
function GuestGreeting(props){
    return <h1> Please Sign In</h1>
}

function Greeeting(props)
{
    const isLoggedIn=props.isLoggedIn;
    if(isLoggedIn){
       return  <UserGreeting/>   
    }
    else{
        return <GuestGreeting/>
    }
     
}

