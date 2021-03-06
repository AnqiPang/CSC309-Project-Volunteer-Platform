import React from 'react';
import { withRouter } from "react-router-dom";
import LoginNav from '../../react-components/Login/LoginNav';
import LoginForm from '../../react-components/Login/LoginForm';
import {login} from '../../actions/login';
import "./styles.css";



class Login extends React.Component{
     constructor(props){
        super(props);
        this.props.history.push("/login");
        //history.push('/login')

    }
    state = { 
        email : "",
        password : "",
        errors: {
            email: "",
            password: "",     
        },
        message:{
            type:"",
            body:""
        } 
    };
    
    handleChange = (event) => {
        event.preventDefault();
        //const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
        const validEmailRegex = /\S+@\S+\.\S+/;
        const target = event.target
        const name = target.name
        const value = target.value
        let errors = this.state.errors;

        
        switch(name) {
            
            case 'email':
                errors.email = 
                    validEmailRegex.test(value)
                        ? ''
                        : "Email is not valid."
                break;
            case 'password':
                errors.password = 
                    value.length < 4
                        ? "Password must be 4 characters long."
                        : '';
                break;
        
            default:
                break;
        }

        this.setState({ errors, [name]: value})
        // console.log("state", this.state)
    }

    validateForm = () => {
        let valid = true;
        let state = this.state
        let errors= this.state.errors


        Object.values(errors).forEach(
            (val) => val.length >0 && (valid = false)
        );

        if(!state.email){
            valid = false;
            errors["email"]="Please enter email."
        }
        if(!state.password){
            valid = false;
            errors["password"]="Please enter password."
        }

        this.setState({
            errors: errors
        })
    
        return valid;
    }

    handleSubmit = (event) => {
        let errors = this.state.errors
        event.preventDefault();
        if(this.validateForm()) {

            const app = this.props.app

            login(this, app)

            /* if(email === 'user@user.com'){
                p.login(email, password, ()=> {this.props.history.push('/volunteer/userpage')})
            } else if (email === 'user2@user.com'){
                p.login(email, password, ()=> {this.props.history.push('/organization/profile')})
            } else if(email === 'admin@admin.com') {
                p.login(email, password, ()=> {this.props.history.push('/admin')})
            } */


            /* if(p.isLogin===false){
                console.log('error')
                errors["password"]="Email or password is not correct."
            }
 */

        } else {
            //console.error('Invalid Form')
        }

        // this.setState({
        //     errors: errors
        // })


    }

    render(){
    
        return(
            <div id='page'className='login'>
                <LoginNav />
                <LoginForm 
                email={this.state.email}
                password={this.state.password}
                errors={this.state.errors}
                msg={this.state.message}
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                />
            </div>
        )
    }
}

export default withRouter(Login);