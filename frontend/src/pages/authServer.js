import { URL } from './URL';
import axios from 'axios';
import jwt_decode from "jwt-decode";
import useAuth from '../hooks/useAuth';
import { useRef, useState, useEffect } from 'react';

export const userLogin = (authRequest)=>{
    return axios.post(`${URL}/${authRequest.url}`,authRequest.data);
}

export const userLogout = (authRequest)=>{
  return axios.post(`${URL}/${authRequest.url}`,authRequest.data);
}

export const registerCompany = (authRequest)=>{
  return axios.post(`${URL}/${authRequest.url}`,authRequest.data);
}

export const Setauthtokens=(accessToken,refreshToekn)=>{
  debugger
    sessionStorage.setItem("accessToken",accessToken);
    sessionStorage.setItem("refreshToekn",refreshToekn);
    const isLogged = true;
    const role = jwt_decode(accessToken).role;
    const { setAuth } = useAuth();
    setAuth({ isLogged, role});
    console.log(sessionStorage.getItem("accessToken"));
}

const getNewTokens = async()=>{
    const data={
        "username":jwt_decode(sessionStorage.getItem("accessToken")).id,
        "role":jwt_decode(sessionStorage.getItem("accessToken")).role,
        "refreshToekn":sessionStorage.getItem("refreshToekn")
    }
    axios.post(`${URL}/token/getNewToekn`,data).then((response)=>{
      Setauthtokens(response.body.accessToken,response.body.refreshToekn);
    })
}

const axiosJWT = axios.create(); //this axio will use for validating calles

axiosJWT.interceptors.request.use(
    async (config)=>{
        let currentDate = new Date();
        if((jwt_decode(sessionStorage.getItem("accessToken")).exp)*1000 < currentDate.getTime()){
            await getNewTokens();
            config.headers['authorization'] = "Bearer "+sessionStorage.getItem("accessToken");
        }
        return config;
    },
    (error)=>{return Promise.reject(error)}
)

export const callServer = (authRequest)=>{
    if(authRequest.method=="post"){
        return axiosJWT.post(`${URL}/${authRequest.url}`,authRequest.data,{
      headers: {
        'Authorization': "Bearer " + sessionStorage.getItem("accessToken"),
      }
    });
    }
    else if(authRequest.method=="get"){
        return axiosJWT.get(`${URL}/${authRequest.url}`,authRequest.data,{
      headers: {
        'Authorization': "Bearer " + sessionStorage.getItem("accessToken"),
      }
    });
    }else if(authRequest.method=="put"){
        return axiosJWT.put(`${URL}/${authRequest.url}`,authRequest.data,{
      headers: {
        'Authorization': "Bearer " + sessionStorage.getItem("accessToken"),
      }
    });
    }
}