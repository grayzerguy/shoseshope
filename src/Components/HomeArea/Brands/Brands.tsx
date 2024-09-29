import "./Brands.css";


const allBrand = [
    { id: 1, name: "Adidas" },
    { id: 2, name: "Nike" },
    { id: 3, name: " Oc" },
    { id: 4, name: "Puma" },
]


export function Brands(): JSX.Element {
    return (
        <div className="Brands Box">

<ul>
                {allBrand.map(item => <li key={item.id}>{item.name}</li>)}
            </ul>
			
        </div>
    );
}
