import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import {ButtonLogin, Input} from './BasicComponents';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUser} from '@fortawesome/free-solid-svg-icons';
import {faFacebookF} from '@fortawesome/free-brands-svg-icons';

const styles = (theme) => ({
    card: {
        width: '100%',
        height: '100%',
        borderRadius: '5px',
        boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.2)',
        backgroundColor: '#ffffff'
    },
    cardContent: {
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    form:{
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
        alignItems: 'center',
        alignContent: 'center',

    },
    buttonsContainer : {
        display: 'flex',
        justifyContent: 'center',
        width: '90%'
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
        marginBottom: '15px',
        [theme.breakpoints.down('md')]: {
            fontSize: '20px'
        }
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
        fontSize: '12px',
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 1,
        letterSpacing: 'normal',
        color: '#bbbec4',
    },
    registerFailed:{
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
  });

const CardFormLogin = ({classes, onChange, onSubmit, formStatus, registerFailed}) => {
    return(
        <Card className={classes.card} >
            <CardContent>
                    <Typography className={classes.cardTitle} >
                    Para validar seu convite é preciso cadastrar os seguintes dados:
                    </Typography>
                    {(registerFailed!==undefined && registerFailed) && <Typography className={classes.registerFailed} >
                        Cadastro falhou, tente novamente.
                    </Typography>}
                    
                <form className={classes.form} onChange={onChange} onSubmit={onSubmit} autoComplete="off">
                        <Input placeholder="Digite seu nome" name="name" type="text"/>
                    
                        <Input placeholder="Digite seu email" name="email" type="email"/>
                    
                        < Input placeholder="Digite sua senha" name="pass" type="password"/>
                    
                        < Input placeholder="Confirme sua senha" name="repeatPass" type="password"/>
                    
                    <div className={classes.buttonsContainer}>
                        <ButtonLogin disabled={false} inputColor={'#3a589b'}>
                            <FontAwesomeIcon className={classes.icon} icon={faFacebookF} />
                            Criar com o Facebook
                        </ButtonLogin>
                        <ButtonLogin disabled={!formStatus.emailValid || !formStatus.passValid || !formStatus.nameValid }
                            inputColor={'#00bc9b'} >
                            <FontAwesomeIcon className={classes.icon} icon={faUser} />
                            Criar Conta
                        </ButtonLogin>
                    </div>
                    
                </form> 
            </CardContent>
        </Card>
    )
}
export default withStyles(styles)(CardFormLogin);