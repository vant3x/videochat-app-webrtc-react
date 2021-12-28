import { useContext, useState } from 'react';
import { Button, TextField, Grid,Typography, Container, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Assignment , Phone, PhoneDisabled  } from '@material-ui/icons';

import { SocketContext } from '../context/SocketContext';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
    },
    gridContainer: {
      width: '100%',
      [theme.breakpoints.down('xs')]: {
        flexDirection: 'column',
      },
    },
    container: {
      width: '600px',
      margin: '35px 0',
      padding: 0,
      [theme.breakpoints.down('xs')]: {
        width: '80%',
      },
    },
    margin: {
      marginTop: 20,
    },
    padding: {
      padding: 20,
    },
    paper: {
      padding: '10px 20px',
      border: '2px solid black',
    },
  }));

const Options = ({children}) => {

    const { me, setName, name, callAccepted, myVideo, userVideo, callEnded, stream, call } = useContext(SocketContext);
    const [idToCall, setIdToCall] = useState('');
    const classes = useStyles();

    return (
        <Container className={classes.container}>
            <Paper elevation={10} className={classes.paper}>
                <form className={classes.root} noValidate autoComplete="off">
                    <Grid container className={classes.gridContainer}>
                        <Grid item xs={12} md={6} className={classes.padding}>
                            <Typography gutterBottom variant="h6">
                                Información de la cuenta
                            </Typography>    
                            <TextField  label="Nombre" value={name} onChange={(e) => setName(e.target.value) } fullWidth />
                            <CopyToClipboard text={me} className={classes.margin}>
                                    <Button variant="contained" color="primary" fullWidth startIcon={<Assignment fontSize="large" />}>
                                        Copiar tu ID
                                    </Button>
                            </CopyToClipboard>
                        </Grid>  

                        <Grid item xs={12} md={6} className={classes.padding}>
                            <Typography gutterBottom variant="h6">
                                Haz una llamada
                            </Typography>    
                            <TextField  label="ID de la llamada" value={idToCall} onChange={(e) => setIdToCall(e.target.value) } fullWidth />
                            {
                                callAccepted && !callEnded ? (
                                    <Button variant="contained" color="secondary"
                                        startIcon={<PhoneDisabled fontSize="large" />}
                                        fullWidth
                                    >
                                        Terminar llamada
                                    </Button>
                                ) : (
                                    <Button variant="contained" color="Primary">
                                        Llamar
                                    </Button>
                                )
                            }
                        </Grid>  
                    </Grid>
                </form>
            </Paper>
            Options
            {children}
        </Container>
    )
}

export default Options;