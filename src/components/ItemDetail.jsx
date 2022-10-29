import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ItemCount from "./ItemCount";
import "../styles/components/ItemDetail.scss";
import { useCartContext } from "../context/CartContext";
import OttoServices from "../services/Otto.service.ts";


const ItemDetail = () => {
  const { detail } = useParams();
  const ottoService = new OttoServices();
  const [data, setData] = useState({});
  const [goCart, setGoCart] = useState(false);
  const { addProduct } = useCartContext();

  useEffect(() => {
    const querydb = ottoService.querydb();
    const queryDoc = ottoService.queryDoc(
      querydb,
      "productos",
      detail
    );
    ottoService
      .getDoc(queryDoc)
      .then((resp) => setData({ id: resp.id, ...resp.data() }));
  }, []);

  const onAdd = (cantidad) => {
    setGoCart(true);
    addProduct(data, cantidad);
  };

  return (
    <div className="itemDetail container mt-3">
      <img src={data.image} alt=""></img>
      <h1>{data.title}</h1>
      <p>
        <b>Descripcion: </b>
        {data.description}
      </p>
      <p>
        <b>Precio:</b> $
        {new Intl.NumberFormat("locales", {
          style: "currency",
          currency: "ARS",
        }).format(data.price)}
      </p>
      {goCart ? (
        <>
          <Link className="terminar" to="/cart">
            Terminar compra
          </Link>
          <Link className="seguir mt-3" to="/">
            Seguir comprando
          </Link>
        </>
      ) : (
        <ItemCount inicial={1} stock={10} onAdd={onAdd} />
      )}
    </div>
  );
};
export default ItemDetail;
