import ItemCount from './ItemCount';
import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getAll } from '../services/HarryPotter';

const ItemDetail = () => {
    const [personajeDetail, setPersonajeDetail] = useState({});
    const { name } = useParams();

    useEffect(() => {
        getAll().then(res => {
            const personaje = res.data.find(el => el.name === name);
            setPersonajeDetail(personaje);
        });
    }, []);

    return (
        <>
            <h2>Nombre: {personajeDetail.actor}</h2>
            <img src={personajeDetail.image} alt={personajeDetail.actor} />
            <h3>Personaje: {personajeDetail.name}</h3>
            <Link
                style={{ backgroundColor: '#0d0d0d', padding: '0.4rem 0.8rem' }}
                to='/students'
            >
                Volver
            </Link>
            {/* <ItemCount /> */}
        </>
    );
};
export default ItemDetail;
