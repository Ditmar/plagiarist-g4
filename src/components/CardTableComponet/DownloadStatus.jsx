
import { AiOutlineMore} from "react-icons/ai";
import { useStyles } from './styles.css';
export const DownloadStatus = ({info}) =>
{
    const classes=useStyles();
    return(
        <div className={classes.content}>
            <div className={
                info == 'HIGH'? classes.high:
                info == 'LOW'? classes.low: classes.normal}>{info}</div>
            <div className={classes.rigth}><AiOutlineMore/></div>
        </div>
    )
}