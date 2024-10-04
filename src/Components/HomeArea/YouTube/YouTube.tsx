import { ShoesCard } from "../ShoesCard/ShoesCard";
import "./YouTube.css";


function YouTube(): JSX.Element {
    return (
        <div className="YouTube Box ">
            <p>
                {isFirstDayOfMonth() ? <span>Pizza</span> : <span></span>}
            </p>
            <iframe
                src="https://www.youtube.com/embed/tgbNymZ7vqY">
            </iframe>
        </div>
    );
}

function isFirstDayOfMonth(): boolean {
    const today = new Date();
    return today.getDate() === 1;
}



export default YouTube