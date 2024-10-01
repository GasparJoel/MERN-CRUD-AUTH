import axios from "./axios";

export const registerTaskRequest = (task)=> axios.post('/task',task);

