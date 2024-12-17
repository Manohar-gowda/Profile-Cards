import axios from "axios";
import { api, API_BASE_URL } from "../api";
import {GET_ALL_PROFILES_FAILURE, PROFILES_CREATE_FAILURE, PROFILES_CREATE_SUCCESS, PROFILES_DELETE_FAILURE, PROFILES_DELETE_SUCCESS, GET_ALL_PROFILES_SUCCESS } from "./ActionType";


export const getAllProfiles= (jwt) => async (dispatch)=>{
    try {
        const { data } = await axios.get(`${API_BASE_URL}/api/profiles/`, {
            headers:{
                "Authorization":`Bearer ${jwt}`
            }
        });
        // console.log("get all PROFILES: " ,data);
        dispatch({type: GET_ALL_PROFILES_SUCCESS, payload: data})
    } catch (error) {
        console.log("catch error - ",error);
        dispatch({type:GET_ALL_PROFILES_FAILURE, payload:error.message})  
    }
}

export const createProfile = (ProfileData) => async (dispatch)=>{
    try {
        
        const {data} = await api.post(`/api/profiles/create`, ProfileData);
        // console.log("Created PROFILES: ",data);
        dispatch({type:PROFILES_CREATE_SUCCESS, payload: data})
        
    } catch (error) {
        console.log("catch error - ",error);
        dispatch({type:PROFILES_CREATE_FAILURE, payload:error.message})
    }
}

export const deleteProfile = (ProfileId) => async (dispatch)=>{
    try {
        const {data} = await api.delete(`/api/profiles/${ProfileId}`);
        // console.log("Deleted PROFILES: ",data);
        dispatch({type:PROFILES_DELETE_SUCCESS, payload: ProfileId})
        
    } catch (error) {
        console.log("catch error - ",error);
        dispatch({type:PROFILES_DELETE_FAILURE, payload:error.message})
    }
}