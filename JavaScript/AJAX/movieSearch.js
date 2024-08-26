const searchBar = document.querySelector('input');
const button = document.querySelector('button');



const searchMovies = async () => {
    const searchValue = searchBar.value;
    const settings = { params: { q: searchValue } }
    const req = await axios.get(`https://api.tvmaze.com/search/shows`, settings);
    searchBar.value = '';
    const shows = req.data;
    getImages(shows);
}

button.addEventListener('click', () => {
    searchMovies();
})

const getImages = (posters) => {
    for (let data of posters) {
        const mPosters = data.show.image.medium;
        if (mPosters) {
            const image = document.createElement('img');
            image.src = mPosters;
            document.body.appendChild(image);
        }
    }
}


