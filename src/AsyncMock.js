import { useEffect, useState } from "react";

const products = [
    {
        id: 1,
        title: "Mancuernas rellenas con cemento",
        price: 500,
        category: 'Mancuerna',
        description: 'Sin marca',
        image: 'https://jumboargentina.vtexassets.com/arquivos/ids/778225-150-auto?v=638176882161270000&width=150&height=auto&aspect=true'
    },
    {
        id: 2,
        title: "Mancuernas Hexagonales",
        price: 700,
        category: 'Mancuerna',
        description: 'Sin marca',
        image: 'https://followfit.com.ar/wp-content/uploads/2021/10/FF022-2BK_2-150x150.jpg'
    },
    {
        id: 3,
        title: 'Colchoneta bagun/fiselina',
        price: 900,
        category: 'Colchoneta',
        description: 'GAP',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzdyJytlSNJezQ9045QuV-feW7ezUkGRzqGA&usqp=CAU'
    },
    {
        id: 4,
        title: 'Soporte para flexiones',
        price: 400,
        category: 'Mini Barras Paralelas',
        description: 'OMNIAFORCE',
        image:'https://olimpica.vtexassets.com/arquivos/ids/468778-150-auto?v=637473651591100000&width=150&height=auto&aspect=true'
    }
]


// Productos generales
export const getProducts = new Promise((resolve) =>{
    setTimeout(()=>{
        resolve(products);
    }, 2000)
});

// Productos en singular
export const getProduct = (id) =>{
    return products.find(prod => prod.id == id);
}

// Filtrado por categoria
export const getProductsByCategory = (category) => {
    return new Promise((res, rej) => {
        setTimeout( () => {
            res(products.filter(prod => prod.category === category));
        }, 500)
    })
}
