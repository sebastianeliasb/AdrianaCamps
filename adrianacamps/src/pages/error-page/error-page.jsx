import {useRouteError} from "react-router-dom";
import MainPageLayout from "../../layouts/MainPageLayout"
import "./style/errorPage.scss"
import home from "../../assets/home.png"
import { Link } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <MainPageLayout backgroundColor={"beige"}>
    <div id="error-page">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
            <div className="home-icon">
            <Link to="/">
        <img src={home}></img>
        </Link>
        </div>
        </div>


        </MainPageLayout>
    
      
    );
}