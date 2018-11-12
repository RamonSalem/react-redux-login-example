import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import {ButtonLogin, Input} from './BasicComponents';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSignInAlt} from '@fortawesome/free-solid-svg-icons';
import {faFacebookF} from '@fortawesome/free-brands-svg-icons';

const styles = {
    card: {
        width: '100%',
        height: '342px',
        borderRadius: '5px',
        boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.2)',
        backgroundColor: '#ffffff'
    },
    cardContent:{
        height:'100%'
    },
    buttonsContainer : {
        display: 'flex',
        justifyContent: 'center',
        width: '90%',
        marginTop: '5%',
    },
    form:{
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
        alignItems: 'center',
        alignContent: 'center'
    },
    cardTitle: {
        marginLeft: 'auto',
        marginRight: 'auto',
        fontSize: '24px',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 1.00,
        letterSpacing: 'normal',
        textAlign: 'center',
        color: '#626262',
        marginTop: '15px',
        marginBottom: '15px'
    },
    media: {
      objectFit: 'cover',
    },
    icon : {
        paddingRight: 5
    },
    text : {
        marginTop: '10px',
        cursor: 'pointer',
        marginRight: 'auto',
        marginLeft: '5%',
        fontSize: '12px',
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 1,
        letterSpacing: 'normal',
        color: '#bbbec4',
    },
    loginFailed:{
        marginLeft: 'auto',
        marginRight: 'auto',
        fontSize: '11px',
        fontStyle: 'normal',
        fontStretch: 'normal',
        letterSpacing: 'normal',
        textAlign: 'center',
        color: 'red',
        marginTop: '5px',
        marginBottom: '5px'
    }
  };

const CardFormLogin = ({classes, onChange, onSubmit, formStatus, loginFailed}) => {
    return(
        <Card className={classes.card} >
            <CardContent className={classes.cardContent}>
                <Typography className={classes.cardTitle} >
                    Sua primeira tarefa é preencher seus dados de acesso:
                </Typography>
                {loginFailed && <Typography className={classes.loginFailed} >
                    Login falhou, tente novamente.
                </Typography>}
                <form className={classes.form} onChange={onChange} onSubmit={onSubmit} autoComplete="off">
                        <Input placeholder="Digite seu email" type="email"/>
                    
                        <Input placeholder="Digite sua senha" type="password"/>
                    
                    <div className={classes.buttonsContainer}>
                       
                        <ButtonLogin disabled={false} inputColor={'#3a589b'}>
                            <FontAwesomeIcon className={classes.icon} icon={faFacebookF} />
                            Entrar com o Facebook
                        </ButtonLogin>
                        <ButtonLogin 
                            disabled={!formStatus.emailValid || !formStatus.passValid}
                            inputColor={'#00bc9b'} >
                            <FontAwesomeIcon className={classes.icon} icon={faSignInAlt} />
                            Entrar
                        </ButtonLogin>
                    </div>
                    <div className={classes.text}>Esqueci minha senha</div>
                </form>        
            </CardContent>
            
        </Card>
    )
}
export default withStyles(styles)(CardFormLogin);