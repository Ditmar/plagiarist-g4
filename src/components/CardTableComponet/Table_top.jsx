import { useStyles } from './styles.css';
import { VscFilter } from 'react-icons/vsc';
import { BiSortUp} from 'react-icons/bi';
export const Head = (props)=>
{
    const style = useStyles();
    return(
            <div className={style.head}>
                <div className={style.title}>{props.title}</div>
                <div className={style.rigth}><VscFilter></VscFilter>Filter</div>
                <div className={style.rigth}><BiSortUp></BiSortUp>Sort</div>    
            </div>
    );
}