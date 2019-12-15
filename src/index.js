/* eslint-disable no-unused-vars */
import {
  search,
  searchArtists,
  searchAlbums,
  searchTracks,
  searchPlaylists,
} from './search';

import album from './album';

import { API_URL } from './config';

export default class SpotifyWrapper {
  constructor(options) {
    this.apiURL = options.apiURL || API_URL;
    this.token = options.token;
    // Linkar com o bind o this da classe com o metodo para utilizar this.apiURL por exemplo
    this.album = album.bind(this)();
  }

  request(url) {
    const headers = {
      headers: {
        Authorization: `Bearer ${this.token}`,
      },
    };
    return fetch(url, headers);
  }
}
