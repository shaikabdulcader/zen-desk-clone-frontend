import axios from "axios";

let AxiosService = axios.create({
    baseURL:"https://zen-desk-clone-backend.onrender.com",
    headers:{
        "Content-Type":"application/json"
    }
})

AxiosService.interceptors.request.use((config)=>{

    if(config.authenticate)
    {
        let token = sessionStorage.getItem('token')
        if(token)
        {
            config.headers.Authorization = `Bearer ${token}`
        }
    }
    return config

},(error)=>{
    return Promise.reject(error)
})
export default AxiosService