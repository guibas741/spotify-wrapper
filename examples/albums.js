/* eslint-disable import/no-extraneous-dependencies */
import SpotifyWrapper from '../src/index';

global.fetch = require('node-fetch');

const spotify = new SpotifyWrapper({
  token: 'BQCXRhqCD2jaQkcAAJf-Kg2wpS9GgLIMQrRnNuhjq1uc-kmuRlmKTBQzB6OPQ4OARMK_R3-23yBp2_shZJBkz5MGjoWwgsbJYFJ4efcAyBZzZnjI8VtwkfnAEFJPs_fU1IlLkrVPS49Y2A',
});

const albums = spotify.search.searchAlbums('Incubus');

albums.then((data) => console.log(data));
