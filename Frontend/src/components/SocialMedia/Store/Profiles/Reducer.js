import {GET_ALL_PROFILES_SUCCESS, PROFILES_CREATE_FAILURE, PROFILES_CREATE_REQUEST, PROFILES_CREATE_SUCCESS, PROFILES_DELETE_FAILURE, PROFILES_DELETE_REQUEST, PROFILES_DELETE_SUCCESS } from "./ActionType";

const initialState = {
    loading: false,
    data: null,
    error: null,
    profiles: [],
}

export const profilesReducer = (state = initialState, action) => {

    switch (action.type) {
        case PROFILES_CREATE_REQUEST:
        case PROFILES_DELETE_REQUEST:
            return { ...state, loading: true, error: null }


        case PROFILES_CREATE_FAILURE:
        case PROFILES_DELETE_FAILURE:
            return { ...state, loading: false, error: action.payload };    

        case PROFILES_CREATE_SUCCESS:
            return { ...state, loading: false, error: null, profiles: [action.payload, ...state.profiles] };

        case GET_ALL_PROFILES_SUCCESS:
            return { ...state, loading: false, error: null, profiles: action.payload };

        case PROFILES_DELETE_SUCCESS:
            return { ...state, loading: false, error: null, profiles: state.profiles.filter((profiles) => profiles.id !== action.payload) };
            
        default:
            return state;
    }
}