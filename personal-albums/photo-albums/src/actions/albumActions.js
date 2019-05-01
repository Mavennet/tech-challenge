import {GET_ALBUMS, GET_PHOTOS} from './types';
import axios from "axios/index";

export function getAlbums(userId){
    const request = axios.get(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`)
        .then(response => response.data.slice(0,5));

    return {
        type: GET_ALBUMS,
        payload: request
    }
}

export function getPhotos(albumId){
    const request = axios.get(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
        .then(response => response.data.slice(0,10));

    return {
        type: GET_PHOTOS,
        payload: request
    }
}