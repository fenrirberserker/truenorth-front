import logo from '../logo.svg';
import '../components/App.css';
import Header from "./Header";
import AppContent from "./AppContent";

export default function App(){

    return(
        <div>
            <Header pageTitle = "Frontend" logoSrc={logo}/>
            <div className="container-fluid"></div>
            <div className="row">
                <div className="col">
                    <AppContent/>
                </div>
            </div>
        </div>
    );
}

