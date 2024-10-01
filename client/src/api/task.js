import axios from "./axios";

export const getTasksRequest = ()=>axios.get('task')
export const registerTaskRequest = (task)=> axios.post('/task',task);
export const getTaskRequest = (id)=>axios.get(`/task/${id}`)
export const updateTaskRequest = (task) =>axios.put(`/task/${task._id}`,task)
export const deleteTaskRequest = (id) =>axios.delete(`/task/${id}`)

