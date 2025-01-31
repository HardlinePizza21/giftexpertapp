export const getGifs = async(category) => {

    let data

    const savedImages = localStorage.getItem(category);

    if(savedImages){
        data = JSON.parse(savedImages);
    }else {
        
        const url = `https://api.giphy.com/v1/gifs/search?api_key=WXLPnESSpDmBrt4fTgdQSkewoIN8jaHq&q=${category}&limit=10`
        const resp = await fetch(url);
        ({data} = await resp.json())    
        
        localStorage.setItem(category, JSON.stringify(data));
        
    }


    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }))
    
    return gifs
}