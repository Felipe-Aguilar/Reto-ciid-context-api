export const NoticiasAPI = async () => {
    
    const options = {
        method: 'GET',
        headers: {
            'X-BingApis-SDK': 'true',
            'X-RapidAPI-Key': 'd1a96cd9d8msh3da1c3bbaca6843p11dcf7jsnf351e5d4731e',
            'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
        }
    };
    
    const response = await fetch('https://bing-news-search1.p.rapidapi.com/news?originalImg=true&safeSearch=Off&textFormat=Raw', options)
        .then(response => response.json())
        .catch(err => console.error(err));

    return response.value;
}


export const BusquedaNoticias = async ( busqueda ) =>{
    const options = {
        method: 'GET',
        headers: {
            'X-BingApis-SDK': 'true',
            'X-RapidAPI-Key': 'd1a96cd9d8msh3da1c3bbaca6843p11dcf7jsnf351e5d4731e',
            'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
        }
    };
    
    const response = await fetch(`https://bing-news-search1.p.rapidapi.com/news/search?q=${busqueda}&freshness=Week&textFormat=Raw&safeSearch=Off`, options)
        .then(response => response.json())
        .catch(err => console.error(err));

    return response.value;
}