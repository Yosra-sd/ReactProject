import React from 'react'
import {Link} from 'react-router-dom'

const Signup = () => {
    return (
        <div>
            <div className="auth">
                <div className="auth-card card">
                <h2>Login Demo</h2>
                
                <div className="row">
                    <form className="">
                    <div className="input-field">
                            <input id="email" type="email" className="validate" placeholder="Email"></input>
                        </div>  
                        <div className="input-field">
                            <input id="name" type="text" className="validate" placeholder="Name"></input>
                        </div>  
                            
                        <div className="input-field">
                            <input id="password" type="password" className="validate" placeholder="Password"></input>
                        </div>        
                    </form>
                    <button className="btn waves-effect waves-light #64b5f6 blue lighten-2">Sign UP</button>
                </div>
                <h5>Already have an account ?
                    <Link to='./login'></Link>
                </h5>
                </div>
            </div>
        </div>
    )
}

export default Signup
