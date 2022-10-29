import { useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/components/Item.scss";

const Item = (props) => {
  const { item } = props;

  useEffect(() => {}, []);

  return (
    <div className="content">
      <div className="card-body">
        <img className="imgMain" src={item.image} alt="" />
        <div className="w-100 d-flex flex-column align-items-center">
          <h1>{item.title}</h1>
          <Link to={`/producto/${item.id}`}>Ver detalle</Link>
        </div>
      </div>
    </div>
  );
};
export default Item;
