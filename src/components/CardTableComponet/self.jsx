import { useStyles } from "./styles.css"



export const Self = ({info}) =>
{
    const style=useStyles();
    return(
        <div>
            <div className={style.self}><img src="assets/images/coreana.jpg" className={style.circle}/></div>
            <div className={style.rigth}>{info}</div>
        </div>
    )
}