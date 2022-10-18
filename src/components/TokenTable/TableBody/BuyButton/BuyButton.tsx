import { MouseEventHandler, ReactNode } from "react";
import classes from './BuyButton.module.css'

function BuyButton(props: {
    children: ReactNode,
    id:number,
    onBuy:(id:number) => void
}) {

    const {children, id, onBuy} = props
    
    const handler: MouseEventHandler = (e) => {
        e.stopPropagation()
        onBuy(id)
    }

    return (
        <button
            className={classes.button}
        onClick={handler}>
            {children}
        </button>
    );
}

export default BuyButton;