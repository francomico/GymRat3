import { data } from "autoprefixer";
import { getProducts } from "../../AsyncMock";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getProductsByCategory } from "../../AsyncMock";

export function ProductsComponent (){
    const navigate = useNavigate();

    const [products,setProducts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("");
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(()=>{
        getProducts.then((data) => setProducts(data));
    }, []);

    useEffect(() =>{
        if (selectedCategory) {
            getProductsByCategory(selectedCategory).then((filteredData) =>
                setFilteredProducts(filteredData)
            );
        }else{
            setFilteredProducts(products);
        }
    }, [selectedCategory, products]);


    const handleClick = (id) => {
        navigate(`/product/${id}`);
    };

   

    return(
        <>
            <div>
                <div className="flex justify-center mt-4">
                    <button onClick={() => setSelectedCategory("Mancuerna")} className="bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded mr-2">Mancuerna</button>
                    <button onClick={() => setSelectedCategory("Colchoneta")} className="bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded mr-2">Colchoneta</button>
                    <button onClick={() => setSelectedCategory("Mini Barras Paralelas")} className="bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded mr-2">Mini Barras Paralelas</button>
                    <button onClick={() => setSelectedCategory("")} className="bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded">Mostrar Todos</button>
                </div>
                <section className="flex flex-wrap justify-center gap-6 mt-10">
                    {
                        filteredProducts.map(product =>(
                            <article key={product.id} className="bg-white rounded-lg shadow-md p-4 w-64 flex flex-col items-center">
                               <h4 className="text-lg font-semibold text-center">{product.title}</h4> 
                               <img src={product.image} alt={product.title} className="mt-2 rounded-lg self-center"/>
                               <p className="mt-2 text-gray-700 text-center">Precio ${product.price}</p>
                               <button onClick={() => handleClick(product.id)} className="mt-5 bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded" >Ver detalles</button>
                            </article>
                        ))
                    }
                </section>
            </div>
        </>
    )
}