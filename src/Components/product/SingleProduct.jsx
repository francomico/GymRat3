import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import { getProduct } from "../../AsyncMock";

export default function SingleProduct(){
    const {prodId} = useParams();

    const [product, setProduct] = useState({});

    useEffect(() => {
        setProduct(getProduct(prodId))
    }, [prodId]);

    return(
        <>
            <div className="max-w-md mx-auto bg-white shadow-md p-6 rounded-lg flex flex-col items-center justify-center mt-10 mb-10">
                <h3 className="text-xl font-semibold mb-4">Nombre: {product.title}</h3>
                <img src={product.image} alt={product.title} className="w-full h-auto rounded-lg mb-4" />
                <p className="text-center"> <span className="font-semibold">Marca:</span> {product.description}</p>
                <p className="text-center"> <span className="font-semibold">Categoria:</span> {product.category}</p>
                <p className="text-center"> <span className="font-semibold">Precio:</span> ${product.price}</p>
            </div>
        </>
    )
}