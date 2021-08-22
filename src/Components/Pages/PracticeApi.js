import axios from 'axios'
import React, {useState} from 'react'
import { useEffect } from 'react/cjs/react.development'

const PracticeApi = () => {

    const [data, setdata] = useState([]);


    useEffect(()=>{
        apicall();
    }, [0]);

    const apicall = async()=>{

        const resolve = await axios.get("https://api.covid19india.org/state_district_wise.json");

        const final = await (resolve.data)

        setdata(final);

        console.log(data)
        

    }



    return (
        <div>

<table className="table text-center ">
                <thead className="table-dark">
                    <tr>
                        <th scope="col">ID<button className="btn btn-primary mx-3">Asc</button></th>
                        <th scope="col">Name</th>
                        <th scope="col">User Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>

       

<tbody>
                    {/* {data.map((elm, i, key) => {
                        return <tr>
                            
                            <td>{elm}</td>
                        </tr>
                        
                    })} */}

                </tbody>

                </table>

            
        </div>
    )
}

export default PracticeApi
