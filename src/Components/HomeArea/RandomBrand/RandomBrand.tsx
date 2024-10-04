import "./RandomBrand.css";
import { useState, useEffect } from 'react';

const brands: string[] = ['Adidas', 'Nike', 'Air Jordan', 'Puma', 'Reebok'];

export function RandomBrand(): JSX.Element {
    const [currentBrand, setCurrentBrand] = useState<string>(brands[0]);

    useEffect(() => {
        const intervalId = setInterval(() => {
            const randomIndex = Math.floor(Math.random() * brands.length);
            const newBrand = brands[randomIndex];
            setCurrentBrand(newBrand);
            console.log('Current brand:', newBrand);
        }, 1000);

        // Cleanup function to stop the timer when the component is unmounted
        return () => {
            clearInterval(intervalId);
        };
    }, []); // Empty dependency array means this effect runs once on mount
    return (
        <div className="RandomBrand">

            <span>{currentBrand}</span>


        </div>
    );
}
