import React from 'react'
import CardFormLogin from '../components/CardFormLogin';
import CardFormRegister from '../components/CardFormRegister';

import { withStyles } from '@material-ui/core/styles';
import Hidden from '@material-ui/core/Hidden';

import {Button} from '../components/BasicComponents';

import { Link } from "react-router-dom";

const styles = theme => ({
    upItem : {
        display : 'flex',
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundImage: 'linear-gradient(111deg, #00bc9b, #1696e1)',
        height   : '23em',
        flexWrap: 'wrap',
        width: '100%',
    },
    cardPosition: {
        marginBottom: '-15em',
        marginRight: 'auto',
        width: '35%',
        height: '100%',
        [theme.breakpoints.down('md')]: {
            height: '100%',
            width: '95%',
            marginRight: 'auto',
            marginLeft: 'auto',
            marginBottom: '-11em'
        },
    },
    text : {
        marginTop: 'auto',
        marginRight: 'auto',
        marginLeft: 'auto',
        marginBottom: '1rem',
        width: '342px',
        marginLeft: '10rem',
        height: '72px',
        fontSize: '36px',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 1,
        letterSpacing: 'normal',
        color: '#ffffff',
        [theme.breakpoints.down('md')]: {
            textAlign: 'center',
            fontSize: '26px',
            marginRight: 'auto',
            marginLeft: 'auto',
            height: '40px',
        }
    },
    textItemMidPanel : { 
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '80%',
        textAlign: 'center',
        color: '#ffffff',
        fontSize: '13px',
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: '1',
        letterSpacing: 'normal',
        marginBottom: '5px',
    },
    itemMessage:{
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: '10px',
        width: '80%',
        textAlign: 'center',
        fontSize: 10,
        color: '#ffffff',
    },
    loginSucceded: {
        textAlign: 'center',
        fontSize: '26px',
        marginRight: 'auto',
        marginLeft: 'auto',
        height: '40px',
        fontSize: '36px',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 1,
        letterSpacing: 'normal',
        color: '#ffffff',
    }
  });

const TopBackground = (props) => {
    const {isRegisterForm,
         onChange, 
         onSubmit, 
         classes,
         isLogged,
         logout,
         formStatus,
         loginFailed,
         registerFailed
        } = props;
    return(
        <div className={classes.upItem}>
            {(
                !isLogged ? 
                    <React.Fragment>
                        <div className={classes.text}>
                            Sua voz será ouvida e recompensada
                        </div>
                        <Hidden mdUp>
                            <div className={classes.textItemMidPanel}>
                                    Você foi convidado a participar da mais inovadora ferramenta de mídia para micro-influenciadores nas redes sociais.
                            </div>
                            {isRegisterForm && <div className={classes.itemMessage} >
                                ESTE CONVITE EXPIRA EM: 03h23m35s 
                            </div>} 
                        </Hidden>
                        <div className={classes.cardPosition}>
                            {(
                                isRegisterForm ? <CardFormRegister 
                                                    onSubmit={onSubmit}
                                                    onChange={onChange}
                                                    formStatus={formStatus}
                                                    registerFailed={registerFailed}
                                                /> : <CardFormLogin
                                                    onChange={onChange}
                                                    onSubmit={onSubmit}
                                                    formStatus={formStatus}
                                                    loginFailed={loginFailed}
                                                    />
                            )}
                        </div>
                    </React.Fragment>    
                    :
                    <React.Fragment>
                        {!isRegisterForm &&<div className={classes.loginSucceded}>
                            Logado com sucesso.
                            <Link to="/register">
                                <Button onClick={()=>{logout()}} inputColor={'#03b7a5'}>Página de cadastro</Button>
                            </Link>
                            <Button onClick={()=>{logout()}} inputColor={'#03b7a5'}>Logout</Button>

                        </div>}
                        {isRegisterForm &&<div className={classes.loginSucceded}>
                            Registrado e logado com sucesso.
                            <Link to="/login">
                                <Button onClick={()=>{logout()}} inputColor={'#03b7a5'}>Página de login</Button>
                            </Link>
                            <Button onClick={()=>{logout()}} inputColor={'#03b7a5'}>Logout</Button>
                        </div>}
                    </React.Fragment>
            )}

        </div>
    )
}
export default withStyles(styles)(TopBackground);