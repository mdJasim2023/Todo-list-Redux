let initialState = {
    count:0
}

const counterReducer = (state=initialState,action)=>{
    if(action.type==='Inc'){
        return {...state,count:state.count+1}
    }
    if(action.type==='Dec'){
        return {...state,count:state.count-1}
    }
    if(action.type==='Reset'){
        return {...state,count:initialState.count}
    }
   
    return state
}

export default counterReducer