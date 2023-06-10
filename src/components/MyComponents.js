import React, { useEffect, useState } from 'react';
import axios from 'axios';

function MyComponent() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://www.random.org/strings/?num=1&len=10&digits=on&unique=on&format=plain&rnd=new');
                setData(response.data);
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