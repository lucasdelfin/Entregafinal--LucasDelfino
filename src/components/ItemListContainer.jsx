import { useEffect, useState } from "react";

import "../styles/components/ItemListContainer.scss";
import ItemList from "./ItemList";
import { query, where } from "firebase/firestore";
import { useParams } from "react-router-dom";
import OttoServices from "../services/Otto.service.ts";

// import platos from '../mock/itemsRest.json'

function ItemListContainer(props) {
  const ottoService = new OttoServices();
  const [data, setData] = useState([]);
  const { categoryId } = useParams();
  const [category, setCategory] = useState("")

  useEffect(() => {
    const querydb = ottoService.querydb();
    const queryCollection = ottoService.queryCollection(
      querydb,
      "productos"
    );
    if (categoryId) {
      const queryFilter = query(
        queryCollection,
        where("category", "==", categoryId)
      );
      ottoService.getDocs(queryFilter).then((resp) =>
        setData(
          resp.docs.map((producto) => {
            return {
              id: producto.id,
              ...producto.data(),
            };
          })
        )
      );
    } else {
      ottoService.getDocs(queryCollection).then((resp) =>
        setData(
          resp.docs.map((producto) => ({
            id: producto.id,
            ...producto.data(),
          }))
        )
      );
    }
    getCategory();
  }, [categoryId]);

  const getCategory = () => {
    switch (categoryId) {
      case "cpu":
        setCategory("Cpu");
        break;
      case "mouse":
        setCategory("Mouse");
        break;
        case "procesadores":
        setCategory("Procesadores");
        break;
      default:
        break;
    }
  };

  return (
    <>
      <header>
        {categoryId ? <h1>{category}</h1> : <h1>{props.greeting}</h1>}
        <ItemList data={data} />
      </header>
    </>
  );
}
export default ItemListContainer;
