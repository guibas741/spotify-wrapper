function searcher(type, query) {
  return this.request(`${this.apiURL}/search?=${query}&type=${type}`);
}

export default function search() {
  return {
    searchAlbums: searcher.bind(this, 'album'),
    searchArtists: searcher.bind(this, 'artist'),
    searchTracks: searcher.bind(this, 'track'),
    searchPlaylists: searcher.bind(this, 'playlist'),
  };
}
