import { ADD_DATA, DEL_MEMBER, DEL_SELECTED_MEMBER } from "./actionTypes"

export const addData = (data) => {
    return{
        type: ADD_DATA,
        payload: data
    }
}

export const delMember = (data) => {
    return{
        type: DEL_MEMBER,
        payload: data
    }
} 

export const delSelectedMember = (data) => {
    return{
        type: DEL_SELECTED_MEMBER,
        payload:  data
    }
}