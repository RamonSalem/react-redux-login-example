import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import {BlueText} from '../components/BasicComponents';

const styles = theme => ({
    midPanel : {
        display: 'flex',
        flexDirection: 'column',
        height   : '150px',
        position: 'fixed',
        backgroundColor: '#ffffff',
        zIndex: '-1'
    },
    item : { 
        marginLeft: '10rem',
        width: '30%',
        marginTop: 'auto',
        color: '#9b9b9b',
        fontSize: '18px',
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: '1.5',
        letterSpacing: 'normal',
    },
     itemMessage : {
        marginLeft: '10rem',
        width: '30%',
        marginTop: '10px',
        fontSize: 11,
        color: '#9b9b9b'
    }
})

const MidPanel = (props) => {
    const {isRegisterForm, classes} = props;
    return(
        <div className={classes.midPanel}>
            <div className={classes.item}>
                Você foi convidado a participar da mais inovadora ferramenta de mídia para micro-influenciadores nas redes sociais.
            </div>
            {isRegisterForm && <div className={classes.itemMessage} >
                ESTE CONVITE EXPIRA EM: <BlueText>03h23m35s</BlueText> 
            </div>}
        </div>
    )
}
export default withStyles(styles)(MidPanel);