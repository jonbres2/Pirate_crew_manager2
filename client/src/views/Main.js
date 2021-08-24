import axios from 'axios';
import { useState, useEffect } from 'react';
import PirateCard from '../components/PirateCard';
import { Link } from '@reach/router'

const Main = props => {
    const [pirates, setPirates] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/pirates')
            .then(res => {
                setPirates(res.data.pirates);
                setLoaded(true);
            });
    }, [loaded])

    const onDelete = () => {
        setLoaded(false);
    }

    return (
        <div>
            <div className="bg-info">
                <div className="container p-4" >
                    <h1 className="d-inline text-center">Pirate Crew!</h1>
                </div>
            </div>
            <div className="container">
                {pirates.map((pirate, index) => {
                    return <>
                        <PirateCard key={index} change={onDelete} targetPirate={pirate} />
                    </>
                })}
            </div>
            <Link to={`/pirates/new`} className="btn btn-primary m-3">Add a New Pirate</Link>
        </div>
    )
}

export default Main;