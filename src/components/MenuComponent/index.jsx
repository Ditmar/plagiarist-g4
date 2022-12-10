import { Link } from 'react-router-dom';
import useStyles from './menuComponent.styles';

const MenuComponent = ({items}) => {
    const classes = useStyles();
    return (
    <div className={classes.menu}>
        <h2>MenuComponent</h2>
       
    </div>)

}
export default MenuComponent;