import React, {Component} from 'react' ;
class Auth extends Component{
    Login()
    {
        console.warn("state",this.state)
        //  alert("Login called")                       
    } 
    render(){
        return (
            <div>
                <div>
                    <input type="text" 
                    onChange={(e)=>{this.setState({email:e.target.value})}} /><br/><br/> 
                    <input type="text"
                    onChange={(e)=>{this.setState({password:e.target.value})}} /><br/><br/>
                    <button onClick={()=>this.Login()}>Login</button>               
                    </div>
            </div>
        );
    }
}
export default Auth;