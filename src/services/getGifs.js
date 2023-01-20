const API_KEY = "YolxJfVQQOI0uHqTgTPKfYd19RypDVRM";

const getGifs = function (keyword, limit) {
    const API_URL = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=${limit}&offset=0&rating=g&lang=en`;

    return fetch(API_URL)
        .then((response) => response.json())
        .then((response) => {
            const { data } = response;
            const gifs = data.map((image) => {
                const { images, title, id } = image;
                const { url } = images.downsized_medium;
                return { title, id, url };
            });
            return gifs;
        });
};

export default getGifs;
