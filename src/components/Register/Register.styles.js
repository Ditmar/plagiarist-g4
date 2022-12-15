import { makeStyles } from "@material-ui/styles";

import theme from "../../theme/theme";

export const RegisterStyles = makeStyles((theme) => ({
    paperStyle: {
        padding: '1.875rem 1.25rem',
        width: '26.25rem', 
        margin: '2.5rem auto', 
        elevation: '1.25rem', 
    },
    headerStyle: {
        margin: 0, 
        fontSize: '1.188rem',
    },
    avatarStyle: {
        backgroundColor: theme.palette.avatar.avatarS,
    },
    labelFont: {
        fontFamily : 'arial',
        fontSize : '0.75rem',
        color : '#A4A6B3',
        opacity : '0.7',
    },
    TypographyFont: {
        fontFamily : 'arial',
        fontSize : '1.188rem',
        color : '#A4A6B3',
        opacity : '0.7',
    },
    formFont: {
        margin: '1.25rem',
        fontFamily : 'arial',
    },
    formStyles: {
        height: '2.5rem', 
        fontSize: '0.875rem', 
        borderRadius : '0.5rem',
    },
    buttonStyle: {
        background: theme.palette.button.buttonS, 
        fontFamily : 'arial',
        fontSize : '0.75rem',
        borderRadius : '0.5rem',
    },
}))