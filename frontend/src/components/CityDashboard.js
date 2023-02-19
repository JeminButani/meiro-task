import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link } from "react-router-dom";

const CityDashboard = () => {

    const [data, setData] = useState([])


    useEffect(() => {
        fetch("http://localhost:5000/totalCity", {
            method: "GET"
        })
            .then((res) => res.json())
            .then((i) => {
                setData(i.data);
            })
    }, [])


    return (
        <div>
            <div>
                <label htmlFor="City">Choose a City: </label>

                <select name="City" id="City">
                    <option value="rajkot">Rajkot</option>
                    <option value="ahmedabad">Ahmedabad</option>
                    <option value="delhi">Delhi</option>
                    <option value="agra">Agra</option>
                    <option value="pune">Pune</option>
                    <option value="bhuj">Bhuj</option>
                    <option value="surat">Surat</option>
                    <option value="patan">Patan</option>
                    <option value="baroda">Baroda</option>
                    <option value="goa">Gao</option>
                </select>
                <button onClick={() => {
                    var temp = document.getElementById('City').value;
                    // console.log(temp);
                    for (let x in data) {
                        // console.log(data[x]);
                        if (data[x].name === temp) {
                            console.log(temp);
                            document.getElementById('one').innerText = data[x].name;
                            document.getElementById('two').innerText = data[x].trips;
                            document.getElementById('three').innerText = data[x].revenue;
                        }
                    }


                }}>Click Me</button>
            </div>



            <h1 >
                City Name: <span id='one'></span>
            </h1>
            <h1 >
                Total Trips: <span id='two'></span>
            </h1>
            <h1 >
                Total Revenue: <span id='three'></span>
            </h1>
            <Link to="/">Back</Link>

        </div>
    )
}

export default CityDashboard
