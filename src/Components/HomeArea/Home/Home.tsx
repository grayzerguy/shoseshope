import { Brands } from "../Brands/Brands";
import { ShoesCard } from "../ShoesCard/ShoesCard";
import YouTube from "../YouTube/YouTube";
import img  from "../../../Assets/Images/logo.jpg";

export function Home(): JSX.Element {
    return (
        <div className="Home ">
            <YouTube />
            <Brands />
            <ShoesCard name="shoes1" size={10} price={100} img={img} />
          
        </div>
    );
}

export default Home
