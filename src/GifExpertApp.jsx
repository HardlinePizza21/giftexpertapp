import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {


    
    const [cateogories, setCateogries] = useState(['One Punch']);

    const onAddCategory = (NewCategory) =>  {


        if(cateogories.includes(NewCategory)) return;

        setCateogries((categories) => {
            return [NewCategory, ...categories];
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
                onNewCategory={(NewCategory) => onAddCategory(NewCategory)}

            />

            {/* Lista+do de Gif */}

            {
                cateogories.map(category => (
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