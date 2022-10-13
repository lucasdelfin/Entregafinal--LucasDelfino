import { Link } from 'react-router-dom';
import '../styles/components/Item.scss';

const Item = props => {
    const { personaje } = props;

    return (
        <div className='content'>
            <div className='card-body'>
                <img src={personaje.image} alt='' />
                <h1>{personaje.name}</h1>
                <Link to={`/students/${personaje.name}`}>Ver detalle</Link>
            </div>
        </div>
    );
};
export default Item;
