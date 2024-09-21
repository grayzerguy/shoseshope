import Footer from "../Footer/Footer";
import { Header } from "../Header/Header";
import Links from "../Links/Links";
import YouTube from "../YouTube/YouTube";
import "./Layout.css";

 function Layout(): JSX.Element {
    return (
        <div className="Layout">

            <header><Header /></header>
            <aside>
                <Links />
            </aside>
            <main><YouTube />
            </main>
            <footer><Footer /></footer>

        </div>
    );
}

export default Layout