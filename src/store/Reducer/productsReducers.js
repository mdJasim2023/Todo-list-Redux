import products from "./products"

let initialState = {
    allproducts:products,
    cart:[],
    bill:0,
    addCart:false,
    count:1,
}
const productReducer = (state=initialState,action)=>{
    if(action.type==='ADDCART'){
        return{...state,cart:[...state.cart,action.payload],bill:+(action.payload.price)+(state.bill),addCart:true}
    }
    // if(action.type==='Search'){
    //     var temp = [...state.allproducts]
    //     temp.filter((a)=>{
    //         return (
    //             a.title.includes(action.payload,action.value)
    //         )
    //     })
    //     return {...state,allproducts:[...temp]}
    // }
    
    if(action.type==='Delete'){
        let temp = [...state.cart]
        temp.splice(action.index,1)
        return {...state,cart:[...temp]}
    }

    if(action.type==='Inc'){
        return {...state,count:state.count+1}
    }
    if(action.type==='Dec'){
        return {...state,count:state.count-1}
    }
    return state
}

export default productReducer