import "./ShoesCard.css";

interface ShoesCardProps {
    name: string;
    size: number;
    price: number;
    img: string;

}

export function ShoesCard(props: ShoesCardProps): JSX.Element {
    return (
        <div className="ShoesCard Box">


            <h3>{props.name}</h3>
            <p>{props.size}</p>
            <p>{props.price}</p>
            <img src={props.img} />


        </div>
    );
}
