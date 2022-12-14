
import { AiOutlineMore} from "react-icons/ai";
import { useStyles } from './styles.css';
export const Downloads = ({info}) =>
{
    const style=useStyles();
    return(
        <div className={style.content}>
            <div className={
                info == 'HIGH'? style.high:
                info == 'LOW'? style.low: style.normal}>{info}</div>
            <div className={style.rigth}><AiOutlineMore/></div>
        </div>
    )
}