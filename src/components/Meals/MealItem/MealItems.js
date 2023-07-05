import classes from './MealItem.module.css'
import { useContext } from 'react';
import MealItemForm from './MealItemForm';
import CartContext from '../../../store/CartContext'

const MealItems = props => {
    const cartCtx = useContext(CartContext);

    const onAddToCartHandler = amount => {
        cartCtx.addItem({
            name: props.name,
            id: props.id,
            amount: amount,
            price: props.price
        })
    };

    return (
        <li className={classes.meal}>
            <div>
                <h3>{props.name}</h3>
                <div className={classes.description}>{props.description}</div>
                <div className={classes.price}>{props.price}</div>
            </div>
            <div><MealItemForm onAddToCart={onAddToCartHandler}/></div>
        </li>
    );
}

export default MealItems;