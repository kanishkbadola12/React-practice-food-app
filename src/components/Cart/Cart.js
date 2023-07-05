import classes from './Cart.module.css'
import Modal from '../UI/Modal';
import CartItem from './CartItem/CartItem'
import { useContext } from 'react';
import CartContext from '../../store/CartContext'

const Cart = props => {
    const cartCtx = useContext(CartContext);

    const addItemHandler = (item) => {
        cartCtx.addItem({...item, amount: 1});
    }

    const removeItemHandler = (id) => {
        cartCtx.removeItem(id);
    }

    const cartItems = <ul className={classes['cart-items']}>{
        cartCtx.items.map(item => 
        <CartItem
            price={item.price}  
            name={item.name}
            amount={item.amount}
            key={item.id}
            onAdd={addItemHandler.bind(null, item)}
            onRemove={removeItemHandler.bind(null, item.id)}
        />
        )
    }</ul>

    const totalItems = cartCtx.items.length;

    return (
        <Modal onClose={props.onClose}>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{`$${cartCtx.totalAmount.toFixed(2)}`}</span>
            </div>
            <div className={classes.actions}>
                <button onClick={props.onClose} className={classes['button--alt']}>Close</button>
                {totalItems > 0 && <button className={classes.button}>Order</button>}
            </div>
        </Modal>
    );
}

export default Cart;