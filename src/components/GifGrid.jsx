export const GifGrid = ({category}) => {


    // const getGifs = async() => {

    //     const url = `https://api.giphy.com/v1/gifs/search?api_key=WXLPnESSpDmBrt4fTgdQSkewoIN8jaHq&q=${category}&limit=10`
    //     const resp = await fetch(url);
    //     const {data} = await resp.json();
        
    //     console.log(data)

    //     const gifs = data.map(img => ({
    //         id: img.id,
    //         title: img.title,
    //         url: img.images.downsized_medium.url
    //     }))

    //     console.log(gifs)

    // }

    // getGifs();

    return (
        <>
            <h3>{category}</h3>
            <p>Hola mundo</p>
        </>
    )
}