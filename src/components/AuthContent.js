import * as React from "react";

import {request} from "../axios_helper";
import axios from "axios";


export default class AuthContent extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }




    async componentDidMount() {


        const res = await axios.get('http://localhost:8080/hello', {
            // Axios looks for the `auth` option, and, if it is set, formats a
            // basic auth header for you automatically.
            auth: {
                username: 'admin',
                password: 'admin'
            }
        }).then((response) => {
            this.setState({data: response.data})
        })
        res()


        // request(
        //     "GET",
        //     "/hello",
        //     {},
        // ).then((response) => {
        //     this.setState({data: response.data})
        // })
    }

    render() {
        return(
            <div>
                {this.state.data && this.state.data.map((line)=><p>{line}</p>)}
            </div>
        );
    }
}