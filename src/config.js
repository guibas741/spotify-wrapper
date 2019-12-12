/* eslint-disable import/prefer-default-export */
const TOKEN_API = 'BQCXRhqCD2jaQkcAAJf-Kg2wpS9GgLIMQrRnNuhjq1uc-kmuRlmKTBQzB6OPQ4OARMK_R3-23yBp2_shZJBkz5MGjoWwgsbJYFJ4efcAyBZzZnjI8VtwkfnAEFJPs_fU1IlLkrVPS49Y2A';

const API_URL = 'https://api.spotify.com/v1';

const HEADERS = {
  headers: {
    Authorization: `Bearer ${TOKEN_API}`,
  },
};

export { HEADERS, API_URL };
