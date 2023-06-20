import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import $ from 'jquery';
import jQuery from 'jquery';
window.jQuery = jQuery;

function MyComponent() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // const response = await axios.get('https://www.random.org/strings/?num=1&len=10&digits=on&unique=on&format=plain&rnd=new');

                var url = 'http://localhost:8080/hello';
                let res = await axios.get(url,
                    {
                        auth: {
                            username: 'admin',
                            password: 'admin'
                        }
                    })


                let data = res.data;
                setData(data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h1>API Response:</h1>
            <ul>
                {data}
            </ul>
        </div>
    );
}

export default MyComponent;