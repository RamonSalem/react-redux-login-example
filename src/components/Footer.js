import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import {BlueText} from './BasicComponents';

const styles = theme => ({
    footer : {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f6f7fb',
        marginTop: 'auto',
        height   : '15%',
        position: 'fixed',
        marginBottom: 0,
        left: 0,
        bottom: 0,
        width: '100%',
        [theme.breakpoints.up('md')]: {
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 'auto',
            height   : '120px',
            backgroundColor: '#f6f7fb',
            position: 'fixed',
            left: 0,
            bottom: 0,
            width: '100%',
        }
    },
    
    itemContainer : {
        display : 'flex',
        alignItems: 'center',
        textAlign: 'center',
        marginTop: '10px',
        [theme.breakpoints.up('md')]: {
            marginLeft: '5rem',
            marginRight: '5rem',
            marginTop: '0',
        }
    },
    
    itemTextEnd : {
        color: '#8e929f',
        fontSize: 11,
        margin: 10,
        cursor: 'pointer',
        marginLeft: 'auto',
        marginRight: 'auto',
        padding: 10,
        [theme.breakpoints.up('md')]: {
            fontSize: 14,
            margin: '5rem',
            padding: 0,
            color: '#8e929f',
            margin: 10,
            cursor: 'pointer'
        }

    },
    
    itemText : {
        fontSize: 11,
        margin: 8,
        color: '#8e929f',
        [theme.breakpoints.up('md')]: {
            margin: '5rem',
            fontSize: 14,
        }
    },
    imgStyle : {
        width: 32,
        height: 32,
        borderRadius: 80,
        [theme.breakpoints.down('md')]: {
            width: 25,
            height: 25,
        }
    },
    imgContainer : {
        display: 'flex',
        fontWeight: '500',
        alignItems: 'center',
    },
    upIcon: {
        fontSize: 9,
        marginBottom: 'auto',
        marginTop: '3px',
        [theme.breakpoints.down('md')]: {
            fontSize: 8,
        }
    },
    talkative:{
        color: '#4a4a4a',
        [theme.breakpoints.down('md')]: {
            fontSize: 11,
        }
    }
});

const Footer = ({classes}) => {
    return(
        <footer className={classes.footer}>
            <div className={classes.itemContainer}>
                <div className={classes.imgContainer}>
                    <img className={classes.imgStyle} src="/assets/media.talkative.icon.png" />
                    <div className={classes.talkative}>talkative</div>
                    <BlueText className={classes.upIcon}>mob</BlueText>
                </div>
                <div className={classes.itemText}>® Mobify é uma ferramenta<br></br> Talkative by Wololo Tech</div>
            </div>
            <div className={classes.itemContainer}>
                <div className={classes.itemTextEnd}>Enviar Feedback</div>
                <div className={classes.itemTextEnd}>Sobre Nós</div>
                <div className={classes.itemTextEnd}>Fale Conosco</div>
            </div>
        </footer>
    )
}
export default withStyles(styles)(Footer);;