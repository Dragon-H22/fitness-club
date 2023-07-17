
export const exerciseOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'e70a8d88d8msh18624f7dd1532c3p1d5583jsn3f36a849753e',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
};

export const youtubeOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
        'X-RapidAPI-Key': 'e70a8d88d8msh18624f7dd1532c3p1d5583jsn3f36a849753e',
    },
};


export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
}