import { useStyles } from './styles.css';
import { VscFilter } from 'react-icons/vsc';
import { BiSortUp} from 'react-icons/bi';
export const TableTop = ({title})=>
{
    const classes = useStyles();
    return(
            <div className={classes.head}>
                <div className={classes.title}>{title}</div>
                <div className={classes.rigth}><VscFilter></VscFilter>Filter</div>
                <div className={classes.rigth}><BiSortUp></BiSortUp>Sort</div>    
            </div>
    );
}