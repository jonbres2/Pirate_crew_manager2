import { Link } from "@reach/router"
import axios from "axios"

const PirateCard = props => {
    const onDeleteHandler = _id => {
        if (window.confirm("Are you sure you want to delete this pirate?")) {
            axios.delete(`http://localhost:8000/api/pirates/${props.targetPirate._id}`)
            props.change(false);
        }
        
    }

    return (
        <div className="container">
            <div className="card m-3">
                <div className="row"><div className="col">
                    <img src={`${props.targetPirate.image}`} alt="pirate profile pic"/>
                </div>
                    <div className="col">
                        <div className="card-body">
                            <h1>{props.targetPirate.name}</h1>
                        </div>
                        <div className="card-body">
                            <Link to={`/pirates/${props.targetPirate._id}`} className="btn btn-primary mx-3">View Pirate</Link>
                            <button className="btn btn-danger" onClick={() => onDeleteHandler()}>Walk the Plank!</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PirateCard;