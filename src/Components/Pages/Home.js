import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom';


const Home = () => {

    const [user, setuser] = useState([])


    useEffect(() => {

        Data();

    }, [])


    const Data = async () => {
        const Pending1 = await axios.get("http://localhost:3002/users");

        const Pending2 = await (Pending1.data);

        setuser(Pending2.reverse());

       

    }


        const asc = ()=>{
            setuser(user.reverse())

            
        }
 


    return (
        <div>
            <h1>Home</h1>

            <table className="table text-center ">
                <thead className="table-dark">
                    <tr>
                        <th scope="col">ID<button className="btn btn-primary mx-3" onClick={ () => asc()}>Asc</button></th>
                        <th scope="col">Name</th>
                        <th scope="col">User Name</th>
                        <th scope="col">Email</th>
                        {/* <th scope="col">Action</th> */}
                    </tr>
                </thead>

                <tbody>
                    {user.map((elm, i, key) => {
                        return <tr>
                            <th scope="row">{i+1}
                            </th>
                            <td>{elm.name}</td>
                            <td>{elm.username}</td>
                            <td>{elm.address.geo.lat}</td>
                            {/* <td >
                                <NavLink to="" className="btn btn-primary">View</NavLink>
                                <NavLink to="" className="btn btn-secondary mx-3">Edit</NavLink>
                                <NavLink to="" className="btn btn-danger">Delete</NavLink>
                            </td> */}
                        </tr>

                        
                     
                        
                    })}

                </tbody>


            </table>


        </div>
    )
}

export default Home
