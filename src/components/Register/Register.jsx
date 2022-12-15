import React from 'react'
import { RegisterStyles } from "./Register.styles";
import { Grid, Paper, Avatar, Typography, Button } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import InputLabel from '@material-ui/core/InputLabel';
import Visibility from '@material-ui/icons/Visibility';
import InputAdornment from '@material-ui/core/InputAdornment';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import useForm from '../../hooks/useForm';


export const RegisterUi = () => {
    const classes = RegisterStyles();
    const {form, handlerChangeForm, handlerResetForm} = useForm({
      email: '',
      password: '',
      repassword: '',
    });

    const { email, password, repassword } = form;
    const onSubmit = data => console.log(data);

    const togglePassword = () => {
      handlerResetForm({ ...password, showPassword: !password.showPassword });
      handlerResetForm({ ...repassword, showRePassword: !repassword.showRePassword});
    };

    return (
        <Grid>
            <Paper className = {classes.paperStyle}>
                <Grid align = 'center' >
                    <Avatar className = {classes.avatarStyle}></Avatar>
                    <Typography variant = 'caption' gutterBottom className = {classes.TypographyFont}>Plagio Control</Typography>
                    <br /><br />
                    <h2 className = {classes.headerStyle}>Sign in Plagio Control</h2>
                    <Typography variant = 'caption' gutterBottom className = {classes.labelFont}>Enter your email and password below</Typography>
                </Grid>
                <br/>
                <form className = {classes.formFont} onSubmit = {onSubmit}>
                    <InputLabel htmlFor = 'standard-adornment-email' className = {classes.labelFont}>EMAIL</InputLabel>
                    <OutlinedInput id = 'outlined-basic1' type ='text' name ='email' value = {email} onChange = {handlerChangeForm}  fullWidth label = 'Email' size = 'small' variant = 'outlined' placeholder = 'Email address' className={classes.formStyles} />
                    <br /><br />
                    <InputLabel htmlFor = 'standard-adornment-password' className = {classes.labelFont}>PASSWORD</InputLabel>
                    <OutlinedInput 
                    id = 'outlined-basic2' 
                    type = {form.showPassword ? 'password' : 'password'}
                    name = 'password'
                    value = {password}
                    onChange = {handlerChangeForm}
                    endAdornment = {
                      <InputAdornment position = 'end'>
                        <IconButton
                          onClick = {togglePassword}
                        >
                        {form.showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    }                    
                    fullWidth 
                    placeholder = 'Password' 
                    className={classes.formStyles}
                    />
                    <br /><br />
                    <InputLabel htmlFor = 'standard-adornment-repassword' className = {classes.labelFont}>RE. PASSWORD</InputLabel>
                    <OutlinedInput 
                    id = 'outlined-basic3' 
                    type= {form.showRePassword ? 'password' : 'password'}
                    name = 'repassword'
                    value = {repassword}
                    onChange = {handlerChangeForm}
                    endAdornment = {
                      <InputAdornment position = 'end'>
                        <IconButton
                          onClick={togglePassword}
                        >
                        {form.showRePassword ? <Visibility /> : <VisibilityOff /> }
                        </IconButton>
                      </InputAdornment>
                    }                    
                    fullWidth 
                    label = 'repassword' 
                    placeholder = 'Repeat password' 
                    className={classes.formStyles}
                    />
                    <br /><br />                                              
                    <Button fullWidth type='submit' variant='contained' color='primary' className={classes.buttonStyle}>Sign in</Button>   
                    <center>
                    <p  className={classes.labelFont}>You do not have an account?  <a href='/' >Login</a> </p>
                    </center>                              
                </form>
            </Paper>
        </Grid>
    )
}