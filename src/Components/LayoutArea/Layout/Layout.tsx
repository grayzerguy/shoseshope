import Footer from "../Footer/Footer";
import { Header } from "../Header/Header";
import Links from "../Menu/Menu";
import { ShoesCard } from "../../HomeArea/ShoesCard/ShoesCard";
import YouTube from "../../HomeArea/YouTube/YouTube";
import "./Layout.css";
import Home from "../../HomeArea/Home/Home";

function Layout(): JSX.Element {
    return (
        <div className="Layout">

            <header><Header /></header>
            <aside>
                <Links />
            </aside>
            <main>

                <Home/>

            </main>
            <footer><Footer /></footer>



        </div>
    );
}

export default Layout