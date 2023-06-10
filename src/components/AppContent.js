import * as React from "react";
import WelcomeContent from "./WelcomeContent";
//import AuthContent from "./AuthContent";
import MyComponent from "./MyComponents";


export default class AppContent extends React.Component{

    render() {
        return(
            <div>
                <WelcomeContent/>
                <MyComponent/>
            </div>
        );
    }

}