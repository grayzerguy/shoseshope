import "./YouTube.css";


function YouTube(): JSX.Element {
    return (
        <div className="YouTube ">
            <p>

                {isFirstDayOfMonth() ? <span>Pizza</span> : <span></span>}

            </p>
            <iframe width="560"
                height="315"
                src="https://www.youtube.com/embed/tgbNymZ7vqY">
            </iframe>

        </div>
    );
}

function isFirstDayOfMonth(): boolean {
    const today = new Date();
    return today.getDate() === 1;


}
console.log(isFirstDayOfMonth());


export default YouTube