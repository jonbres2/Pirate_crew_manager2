import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from '@reach/router'

const Details = props => {
    const [pirate, setPirate] = useState({});
    const id = props.id;

    useEffect(() => {
        axios.get(`http://localhost:8000/api/pirates/${id}`)
            .then(res => {
                setPirate(res.data.pirate[0])
            })
            .catch(err => console.log(err));
    }, [id])

    const BoolCheck = bool => {
        if (bool === true) {
            return "Yes"
        }
        else {
            return "No"
        }
    }

    return (
        <div>
            <div className="bg-info">
                <div className="container p-4" >
                    <h1 className="d-inline text-center">Viewing Pirate: {pirate.name}!</h1>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="border m-3 p-3 col">
                        <img src={pirate.image} alt="pirate profile pic" />
                        
                        <h1>"{pirate.catchPhrase}"</h1>
                    </div>
                    <div className="border m-3 p-3 col-6">
                        <h2>Position: {pirate.position}</h2>
                        <br/>
                        <h2>Treasures: {pirate.treasures}</h2>
                        <br/>
                        <h2>Peg Leg: {BoolCheck(pirate.pegLeg)}</h2>
                        <br/>
                        <h2>Eye Patch: {BoolCheck(pirate.eyePatch)}</h2>
                        <br/>
                        <h2>Hook Hand: {BoolCheck(pirate.hookHand)}</h2>
                    </div>
                </div>
                <Link className="btn btn-primary btn-lg" to="/">Go Back to Pirate List</Link>
            </div>
        </div>
    )
}

export default Details;