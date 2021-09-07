import axios from 'axios'
import React, {useState} from 'react'
import { useEffect } from 'react/cjs/react.development'

const PracticeApi = () => {

    const [news, setNews] = useState();


    useEffect(()=>{
        apicall();
    }, []);
    

   

    const apicall = async()=>{

        const resolve = await axios.get("https://newsapi.org/v2/everything?q=Apple&from=2021-09-01&sortBy=popularity&apiKey=ca5366c5ddb84bb482fc26b7261fdc8b");

        const final = await (resolve.data);

        setNews(final)

        console.log(news.source)
        

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
                    {/* {data.map((elm, i, key) =>  <tr>
                            
                            <td>{elm}</td>
                        </tr>
                        
                    )} */}

                </tbody>

                </table>

            
        </div>
    )
}


export default PracticeApi
