import axios from "../Utils/axiosCustomize";


const postCreateNewUser = (email, password, username, role, image) =>{
    const data = new FormData();
    data.append('email', email);
    data.append('password', password);
    data.append('username', username);
    data.append('role', role);
    data.append('userImage', image);
    return axios.post('v1/participant', data);
}
const putCreateNewUser = ( username, role, image, id) =>{
    const data = new FormData();
    data.append('username', username);
    data.append('id', id);
    data.append('role', role);
    data.append('userImage', image);
    return axios.put('v1/participant', data);
}
const delUser = ( userId) =>{
    return axios.delete('v1/participant', {data:{id:userId}});
}
const getAllUser = () =>{
   
    return axios.get('v1/participant/all');
}
const getPaginateUser = (page,limit) =>{
   
    return axios.get(`v1/participant?page=${page}&limit=${limit}`);
}

export {postCreateNewUser,getAllUser, putCreateNewUser,delUser, getPaginateUser}