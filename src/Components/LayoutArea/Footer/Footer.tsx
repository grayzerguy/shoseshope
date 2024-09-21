import "./Footer.css";

export function Footer(): JSX.Element {
    return (
        <div className="Footer">

            <p>כל הזכויות שמורות –מוישה אופניק אתרים  &copy; {showCurrentYear()}</p>

        </div>
    );
}

// Will print the current year, e.g., 2024
function showCurrentYear(): number {
    return new Date().getFullYear();
}




export default Footer
