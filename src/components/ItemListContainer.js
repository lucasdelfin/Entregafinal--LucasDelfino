import { useEffect, useState } from 'react';
import { getAll } from '../services/HarryPotter';
import '../styles/components/ItemListContainer.scss';
import ItemList from './ItemList';

function ItemListContainer(props) {
    const [personajes, setPersonajes] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            getAll()
                .then(res => {
                    setPersonajes(res.data);
                })
                .finally(setLoading(false));
        }, 2000);
    }, []);

    return (
        <>
            {loading ? (
                <h2>Cargando...</h2>
            ) : (
                <header>
                    <h1>{props.greeting}</h1>
                    <ItemList personajes={personajes} />
                </header>
            )}
        </>
    );
}
export default ItemListContainer;
