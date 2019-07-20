import React,{Component} from 'react';

class Login extends Component {
    state ={
        email:'',
        password:''
    }
    handleChangeEmail=(e)=>{
        this.setState({email: e.target.value
        })       
    }
    handleChangePassword=(e)=>{
      this.setState({
        password: e.target.value
      })  
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        if (this.state.email === "joker@zaio.io" && this.state.password === "zaiojoke" ){
          window.location.href='/login/jokes';
        }else{
          alert("wrong email or password");
        }
    }
    render(){return(<div className="container">
            <form id="Home" onSubmit={this.handleSubmit}>
                <div className="input-field">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" onChange={this.handleChangeEmail}/>
                </div>
                <div className="input-field">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" onChange={this.handleChangePassword}/>
                </div>
                <div className="input-field">
                    <button>Login</button>
                </div>
            </form>
        </div>
    )}
        
    
        
}

export default Login