import { NavLink } from "react-router-dom";
import "./Menu.css";

export function Menu(): JSX.Element {
    return (
        <div className="menu">

            {/* <ul>
                <a >דף הבית</a>
                <br />
                <a>מוצרים</a>
                <br />
                <a>סיפורי הצלחה</a>
                <br />
                <a>מי אנחנו</a> */}
            <NavLink to={"/home"}>דף הבית</NavLink>
            <br />
            <NavLink to={"/products"}>מוצרים</NavLink>
            <br />
            <NavLink to={"/successStories"}>סיפורי הצלחה</NavLink>
            <br />
            <NavLink to={"/about"}>מי אנחנו</NavLink>
            <br />
            <NavLink to={"/employees "}> עובדים</NavLink>
            <br />
            <NavLink to={"/productsNew"}>מוצרים נוספים</NavLink>


            {/* </ul> */}

        </div>
    );
}

export default Menu