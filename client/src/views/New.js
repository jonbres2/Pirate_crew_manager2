import { useState } from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';

const PirateForm = props => {
    const [form, setForm] = useState({
        name: "",
        position: "captain",
        treasures: 0,
        image: "",
        catchPhase: "",
        pegLeg: true,
        eyePatch: true,
        hookHand: true
    });
    const [errors, setErrors] = useState([]);

    const onChangeHandler = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const onCheckHandler = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.checked
        })
    }

    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/pirates/new', form)
            .then(res => {
                console.log(res)
                if (res.data.errors) {
                    const errorResponse = res.data.errors;
                    const errorArr = [];
                    for (const key of Object.keys(errorResponse)) {
                        errorArr.push(errorResponse[key].message)
                    }
                    setErrors(errorArr);
                }
                else {
                    navigate('/')
                }
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <div className="bg-info">
                <div className="container p-4" >
                    <h1 className="d-inline text-center">Add a New Pirate!</h1>
                </div>
            </div>
            <div className="container">
                {errors.map((err, index) => <p className="text-danger" key={index}>{err}</p>)}
                <form onSubmit={onSubmitHandler}>
                    <div className="form-group">
                        <label className="mt-3 mx-2">Name: </label>
                        <input type="text" name='name' onChange={onChangeHandler} />
                    </div>
                    <div className="form-group">
                        <label className="mt-3 mx-2">Position: </label>
                        <select name="position" className="form-select" onChange={onChangeHandler}>
                            <option value="Captain">Captain</option>
                            <option value="Cook">Cook</option>
                            <option value="First Mate">First Mate</option>
                            <option value="Quarter Master">Quarter Master</option>
                            <option value="Powder Monkey">Powder Monkey</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label className="mt-3 mx-2">Treasures: </label>
                        <input type="number" name='treasures' onChange={onChangeHandler} />
                    </div>
                    <div className="form-group">
                        <label className="mt-3 mx-2">Catch Phrase: </label>
                        <input type="text" name='catchPhrase' onChange={onChangeHandler} />
                    </div>
                    <div className="form-group">
                        <label className="mt-3 mx-2">Image URL: </label>
                        <input type="text" name='image' onChange={onChangeHandler} />
                    </div>
                    <div className="form-group">
                        <label className="mt-3 mx-2">Peg Leg: </label>
                        <input type="checkbox" name='pegLeg' checked={form.pegLeg} onChange={onCheckHandler} />
                    </div>
                    <div className="form-group">
                        <label className="mt-3 mx-2">Eye Patch: </label>
                        <input type="checkbox" name='eyePatch' checked={form.eyePatch} onChange={onCheckHandler} />
                    </div>
                    <div className="form-group">
                        <label className="mt-3 mx-2">Hook Hand: </label>
                        <input type="checkbox" name='hookHand' checked={form.hookHand} onChange={onCheckHandler} />
                    </div>
                    <div className="form-group mt-1">
                        <button className="btn btn-success mx-2" type="submit">Submit</button>
                    </div>
                </form>
            </div>
            <br /><br />
            <Link className="btn btn-primary btn-lg" to="/">Go Back to Pirate List</Link>
        </div>
    )
}

export default PirateForm;