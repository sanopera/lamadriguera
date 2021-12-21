import { BsCart3 } from "react-icons/bs";
import './CartWidgetCss.css';

function CartWidget() {
    return (
        <div>
            <a href="/#" className="carrito"> <BsCart3 /> </a>
        </div>
    )
}

export default CartWidget
