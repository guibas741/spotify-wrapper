/* eslint-disable import/no-extraneous-dependencies */
import { searchAlbums } from '../src/search';

global.fetch = require('node-fetch');

const albums = searchAlbums('Incubus');

albums.then((data) => console.log(data));
