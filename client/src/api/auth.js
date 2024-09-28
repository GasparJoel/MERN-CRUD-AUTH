import axios from "./axios";

// esto se remplazo por axios.js 
//const API = "http://localhost:4000/api";

export const registerRequest = (user) => axios.post(`/register`, user);

export const loginRequest = (user) =>axios.post(`/login`,user)

//Para poder verificar si las credenciales verificadas pertenecen algun usuario
export const verityTokenRequet = ()=> axios.get('/verify')
