import { useLoaderData } from "react-router-dom";
import Header from "../Header/Header";
import Brand from "../Brands/Brand";


const Home = () => {
    const brands = useLoaderData([]);
    console.log(brands);
    return (
        <div>
            <Header></Header>
            <div className="container mx-auto mt-5 md:mt-10">
                <h3 className="text-center text-4xl font-bold">Provided Brand</h3>
            </div>
            <div className="container mx-auto gap-1 md:gap-5 my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    brands.map(brand => <Brand key={brand.id} brand={brand}></Brand>)
                }
            </div>

        </div>
    );
};

export default Home;