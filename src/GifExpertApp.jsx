import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {

    const [cateogries, setCateogries] = useState(['One Punch']);

    const onAddCategory = (NewCategory) =>  {

        if( cateogries.includes(NewCategory) ) return;

        setCateogries((categories) => {
            return [...categories, NewCategory];
        });
    }



    return (
        <>
            {/* Titulo */}
            <h1>GifExpertApp</h1>

            {/* input */}

            <AddCategory 
                //Mandar el controlador de las categorias
                // setCategories={setCateogries}

                //Emite la categoria para ser agregada con la funcion onAddCategory 
                //On Siginifica que se esta emitiendo algo
                onNewCategory={NewCategory => onAddCategory(NewCategory)}
            />

            {/* Listado de Gif */}

            {
                cateogries.map(category => (
                        <GifGrid 
                            key={category} 
                            category={category}
                        />
                ))
            }

            {/* Gif item */}



        </>
    )
}