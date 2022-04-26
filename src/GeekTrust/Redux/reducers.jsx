import { ADD_DATA, DEL_MEMBER, DEL_SELECTED_MEMBER } from "./actionTypes"

const initialState = {
    membersList: [],
    selectedMember:[]
}

export const geekReducer = (state = initialState, { type, payload }) => {
    switch (type) {

        case ADD_DATA:
            return {
                ...state,
                membersList: payload
            }

        case DEL_MEMBER:
            const updatedList = state.membersList.filter((value)=> value.id !== payload.id)
            return{
                ...state,
                membersList: updatedList
            }

        case DEL_SELECTED_MEMBER:
            console.log('delselectedpayload', payload)
            return{
                ...state,
             selectedMember: [...state.selectedMember, payload]
            }


        default:
            return state
    } 


}
