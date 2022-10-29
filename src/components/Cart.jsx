import { Link } from "react-router-dom";
import { useCartContext } from "../context/CartContext";
import ItemCart from "./ItemCart";
import "../styles/components/Cart.scss";
import { serverTimestamp } from "firebase/firestore";
import OttoServices from "../services/Otto.service.ts";

const Cart = () => {
  const ottoService = new OttoServices();
  const { cart, precioTotal, cleanCart } = useCartContext();
  const orden = {
    cliente: {
      nombre: "Lucas Delfino",
      email: "lucasdel.7@hotmail.com",
      telefono: "+542262609631",
      direccion: "59  N°1241",
    },
    item: cart.map((producto) => ({
      id: producto.id,
      titulo: producto.title,
      precio: producto.price,
      cantidad: producto.cantidad,
    })),
    total: precioTotal(),
    date: serverTimestamp(),
  };

  const handleClick = () => {
    const db = ottoService.querydb();
    const ordersCollection = ottoService.queryCollection(
      db,
      "orders"
    );
    ottoService.postDoc(ordersCollection, orden).then(({ id }) => {
      console.log(id);
      cleanCart();
    });
  };

  if (cart.length === 0) {
    return (
      <div className="container d-flex flex-column align-items-center mt-3">
        <p>No hay elementos en el carrito</p>
        <Link className="hacerCompra" to="/">
          <button className="boton">Hacer un compra</button>
        </Link>
      </div>
    );
  }

  return (
    <>
      <div className="container d-flex flex-column align-items-center mt-3 mb-3">
        <p>
          Total: $
          {new Intl.NumberFormat("locales", {
            style: "currency",
            currency: "ARS",
          }).format(precioTotal())}
        </p>
        <button className="boton" onClick={handleClick}>
          <Link to="/">Generar Orden</Link>
        </button>
      </div>
      <div className="container contenedor">
        {cart.map((producto) => {
          return <ItemCart key={producto.id} producto={producto} />;
        })}
      </div>
    </>
  );
};
export default Cart;
