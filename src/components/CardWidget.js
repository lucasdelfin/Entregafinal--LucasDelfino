import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "../styles/CardWidget.scss"

function CardWidget() {
    return (
        <div className='padreCarrito'>
            <FontAwesomeIcon className="carrito" icon={faCartShopping} />
            <div className='numero'>
                1
            </div>
        </div>

    )
}

export default CardWidget