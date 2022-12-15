import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme)=>({
    title:{
        float:'left',
        width:'10rem'
    },
    rigth:{
        float:'right',
        
    },
    head:{
        backgroundColor:theme.palette.primary.main,
        width: '85.5rem',
        height: '2.5rem',
        padding:'0.5rem',
        margin: '0',
    },
    self:{
        width:'3rem',
        float:'left'
    },
    left:{
        float:'left',
    },
    circle:{
        width: '2rem',
        height: '2rem',
        borderRadius:'50%',
    },
    content:{
        width:'20vw'
    },
    high:{
        backgroundColor: 'red',
        borderRadius:'2rem',
        float:'left',
        color: theme.palette.primary.main,
        width: '2rem',
        height: '1rem',
        paddingTop:'0.15rem',
        fontSize: '0.6rem',
        textAlign: 'center'
    },
    low:{
        backgroundColor: ' #FFC300 ',
        borderRadius:'2rem',
        float:'left',
        color: theme.palette.primary.main,
        width: '2rem',
        height: '1rem',
        paddingTop:'0.15rem',
        fontSize: '0.6rem',
        textAlign: 'center'
    },
    normal:{
        backgroundColor: '#2ecc71',
        borderRadius:'2rem',
        float:'left',
        color: theme.palette.primary.main,
        width: '3rem',
        height: '1rem',
        paddingTop:'0.15rem',
        fontSize: '0.6rem',
        textAlign: 'center'
    }
}));