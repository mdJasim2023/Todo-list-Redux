export function ADDTASK(t){
    return {type:'ADDTODO',payload:t}
}

export function Increment(){
    return {type:'Inc'}
}
export function Decrement(){
    return {type:'Dec'}
}
export function Reset(){
    return {type:'Reset'}
}
export function DELETE(ind){
    return {type:'Delete',index:ind}
}