import { useStyles } from "./styles.css"

export const Self = ({info}) =>
{
    const classes=useStyles();
    return(
        <div>
            <div className={classes.self}><img src="assets/images/coreana.jpg" className={classes.circle}/></div>
            <div className={classes.rigth}>{info}</div>
        </div>
    )
}