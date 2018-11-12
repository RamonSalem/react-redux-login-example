import React, { Component } from 'react';
import Hidden from '@material-ui/core/Hidden';
import { connect } from 'react-redux';
import { login, logout } from '../../actions/user';
import Footer from '../../components/Footer';

import TopBackground from '../../containers/TopBackground';
import MidPanel from '../../containers/MidPanel';
import {isValidEmail, isValidPass} from '../../utils/validators';

const mapDispatchToProps = (dispatch)=>{
    return {
        login : (formBody) => dispatch(login(formBody)),
        logout: ()=>dispatch(logout())
    };
};

const mapStateToProps = (state) =>{
    return {
        token: state.user.token,
        loginFailed : state.loginFailed
    }
}

class Login extends Component {
  
    constructor(props){
        super(props)
        this.state = {
            emailValid : false,
            passValid : false
        }
    }

    /**
     * Verifies and validate fields
     */
    handleChange = (event)=>{
        if(event.target.type==='email'){
            this.setState({emailValid: isValidEmail(event.target.value) });
        }else if(event.target.type==='password'){
            this.setState({passValid: isValidPass(event.target.value)})
        }
    }

    handleSubmit = (event)=>{
        const formBody = {
            email: event.target[0].value,
            password: event.target[1].value,
        }
        this.props.login(formBody);  
        event.preventDefault();
        event.target.reset();
        this.setState({emailValid : false,
            passValid : false,
            nameValid : false});
    }
  
    render() {
        return (
            <div>
                <TopBackground
                    onChange={this.handleChange} 
                    isLogged={this.props.token}
                    onSubmit={this.handleSubmit}
                    logout={this.props.logout}
                    formStatus={this.state}
                    loginFailed={this.props.loginFailed}
                />
                <Hidden mdDown>
                    <MidPanel/> 
                </Hidden>
                <Footer/>
            </div>
        );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
