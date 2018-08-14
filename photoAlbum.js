const axios = require('axios');

// Get by album querys using ?albumId=#
const getByAlbumId = (albumId) => {
    return axios
        .get(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
        .then(res => res.data)
        .catch(error => console.log(error));
  };

module.exports = { getByAlbumId };