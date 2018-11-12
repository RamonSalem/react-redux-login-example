import React, { Component } from 'react';
import Hidden from '@material-ui/core/Hidden';
import { connect } from 'react-redux';
import { registerUser, logout } from '../../actions/user';
import Footer from '../../components/Footer';
import MidPanel from '../../containers/MidPanel';
import {isValidEmail, isValidRepeatPass, isValidName} from '../../utils/validators';
import TopBackground from '../../containers/TopBackground';

const mapDispatchToProps = (dispatch)=>{
    return {
        register : (formBody) => dispatch(registerUser(formBody)),
        logout: ()=>dispatch(logout())
    };
};

const mapStateToProps = (state) =>{
    return {
        token: state.user.token,
        registerFailed : state.registerUserFailed    
    }
}

class Register extends Component {
  
    constructor(props){
        super(props)
        this.state = {
            emailValid : false,
            passValid : false,
            nameValid : false,
            pass : '',
            repeatPass: ''
        }
        this.handleChange = this.handleChange.bind(this);
    } 
    
    /**
     * Verifies and validate fields
     */
    handleChange = (event)=>{
        if(event.target.type==='email'){
            this.setState({emailValid: isValidEmail(event.target.value) });
        }else if(event.target.type==='password'){
            if(event.target.name === 'pass'){
                this.setState({pass: event.target.value});
                this.setState({passValid: isValidRepeatPass(event.target.value, this.state.repeatPass)})
            }
            else if(event.target.name === 'repeatPass'){
                this.setState({repeatPass: event.target.value})
                this.setState({passValid: isValidRepeatPass(this.state.pass, event.target.value)})
            }
        }else if(event.target.name === 'name'){
            this.setState({nameValid: isValidName(event.target.value)})
        }
    }

    handleSubmit = (event)=>{
        const formBody = {
            name: event.target[0].value,
            email: event.target[1].value,
            password: event.target[2].value,
        }
        this.props.register(formBody);  
        event.preventDefault();
        event.target.reset();
        this.setState({emailValid : false,
                        passValid : false,
                        nameValid : false,
                        pass : '',
                        repeatPass: ''});
    }
  
    render() {
        return (
            <div>
                <TopBackground 
                    onChange={this.handleChange} 
                    onSubmit={this.handleSubmit} 
                    isRegisterForm
                    isLogged={this.props.token}
                    logout={this.props.logout}
                    formStatus={this.state}
                    registerFailed={this.props.registerFailed}
                    />
                <Hidden mdDown> 
                    <MidPanel isRegisterForm />
                </Hidden>
                <Footer/>
            </div>
        );   
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);
