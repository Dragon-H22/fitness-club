
export const exerciseOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'f262e4663dmshcaf3e0b16d55044p16d10ejsn3713299d7fef',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
};

export const youtubeOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
        'X-RapidAPI-Key': 'c534b73f06msha846d33e7f8e44cp12e828jsn8498797682e0',
    },
};


export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
}