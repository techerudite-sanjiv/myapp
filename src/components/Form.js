import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
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
        Cookies.set("bio_data",JSON.stringify(data))
    }

    const handleChange = (e) => {
        let bio_data_name = e.target.name
        let bio_data_value = e.target.value
        setData({ ...data, [bio_data_name]: bio_data_value })
    }


    let get_bioData = localStorage.getItem('user_data');
    let get_bioData1 = Cookies.get('bio_data');
    console.log(get_bioData, "i am get bio dtata")
    console.log(get_bioData1, "i am cookies data")

    return (
        <div className="form-box">
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" onChange={(e) => handleChange(e)} />
                <br /> <br />
                <input type="text" name="address" onChange={(e) => handleChange(e)} />
                <br /> <br />
                <input type="text" name="email" onChange={(e) => handleChange(e)} />
                <br /> <br />
                <input type="text" name="age" onChange={(e) => handleChange(e)} />
                <br /> <br />
                <button>Submit</button>
            </form>
        </div>
    );
};

export default Form;
