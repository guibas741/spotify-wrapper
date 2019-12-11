/* eslint-disable arrow-body-style */
import { API_URL } from './config';
import { toJSON } from './utils';

export const getAlbum = (id) => {
  return fetch(`${API_URL}/albums/${id}`)
    .then(toJSON);
};

export const getAlbums = (id) => {
  return fetch(`${API_URL}/albums/?ids=${id}`)
    .then(toJSON);
};

export const getAlbumTracks = (id) => {
  return fetch(`${API_URL}/albums/${id}/tracks`)
    .then(toJSON);
};
