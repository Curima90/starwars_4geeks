import { createContext, useState, useEffect, useReducer } from "react";
import axios from "axios";

let TheContext = createContext(null);

let URL = "https://swapi.dev/api/people/?page=";
let URLS = [...Array(9)].map((el, i) => {
  return `${URL}${i + 1}`;
});

let imgBase = "https://starwars-visualguide.com/assets/img/characters";

function reducer(state, action) {
  if (action.type === "set data") {
    return { ...state, dataImported: action.payload };
  }
}

async function fetchData(dispatch) {
  let fetches = URLS.map((el) => {
    return axios.get(el);
  });
}

export { TheContext };