import Cookies from "js-cookie";
import React, { useState } from "react";
import "./form.css";

const Form = () => {

    const [data, setData] = useState(
        {
            name: "",
            address: "",
            email: "",
            age: ""
        }
    )

    const handleSubmit = (e) => {
        e.preventDefault()
        localStorage.setItem('user_data', JSON.stringify(data))
        Cookies.set("bio_data", JSON.stringify(data))
    }

    const handleChange = (e) => {
        let bio_data_name = e.target.name
        let bio_data_value = e.target.value
        setData({ ...data, [bio_data_name]: bio_data_value })
    }


    let local_bioData = localStorage.getItem('user_data');
    let cookie_bioData = Cookies.get('bio_data');

    console.log(local_bioData, "i am local storage data")
    console.log(cookie_bioData, "i am cookies data")
    console.log(data, "i am array data")

    return (
        <div className="form-box">
            <form onSubmit={handleSubmit}>
                <label>Name</label> <br />
                <input type="text" name="name" onChange={(e) => handleChange(e)} />
                <br /> <br />
                <label>Age</label> <br />
                <input type="text" name="age" onChange={(e) => handleChange(e)} />
                <br /> <br />
                <label>Email</label> <br />
                <input type="text" name="email" onChange={(e) => handleChange(e)} />
                <br /> <br />
                <label>Address</label> <br />
                <input type="text" name="address" onChange={(e) => handleChange(e)} />
                <br /> <br />

                <button>Submit</button>
            </form>
        </div>
    );
};

export default Form;
