import { useRef, useState } from 'react';
import classes from './MealItemForm.module.css'
import Input from '../../UI/Input';

const MealItemForm = props => {
    const amountInputRef = useRef();
    const [isAmountValid, setIsAmountValid] = useState(true)

    const submitHandler = event => {
        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNumber = +enteredAmount;

        if (
            enteredAmount.trim().length === 0 ||
            enteredAmountNumber < 1 ||
            enteredAmountNumber > 5
            ) {
            setIsAmountValid(false);
            return;
        }

        props.onAddToCart(enteredAmountNumber);
        event.preventDefault();
    };

    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <Input
                ref={amountInputRef}
                label='Amount'
                input={{
                    type: 'input',
                    min: '1',
                    max: '5',
                    step: '1',
                    defaultValue: '1'
                }}
            />
            <button>+ Add</button>
            {!isAmountValid && <p>Enter a valid number between (1-5)</p>}
        </form>
    );
}

export default MealItemForm;