
let initialState = {
    cart:[]
}
const registerReducer = (state=initialState,action)=>{
    if(action.type==='Add'){
        return {...state,cart:[...state.cart,action.payload]}
    }
    return state
}

export default registerReducer