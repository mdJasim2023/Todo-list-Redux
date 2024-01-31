import products from "./products"

let initialState = {
    allproducts:products,
    searchedproducts:products,
    cart:[],
    bill:0,
    count:1
}
const productReducer = (state=initialState,action)=>{
    if(action.type==='ADDCART'){
        let temp=[...state.allproducts]
        temp=temp.map((a)=>{
            if(a.title===action.payload.title)
            {
                a.inCart=true;
                return a
            }
            else
            return a
        })
        return{...state,cart:[...state.cart,action.payload],bill:+(action.payload.price)+(state.bill),addCart:true,searchedproducts:[...temp]}
    }
    if(action.type==='Search'){
        var temp = [...state.allproducts]
        temp=temp.filter((a)=>{
            return (
                a.title.toLowerCase().includes(action.payload.toLowerCase())
            )
        })
        return {...state,searchedproducts:[...temp]}
    }
    
    if(action.type==='Delete'){
        let temp1=[...state.allproducts]
        temp1=temp1.map((a)=>{
            if(a.title===action.payload.title)
            {
                a.inCart=false;
                return a
            }
            else
            return a
        })
        let temp = [...state.cart]
        temp.splice(action.index,1)
        return {...state,cart:[...temp],bill:+(state.bill)-(action.payload.price),searchedproducts:[...temp1]}
    }

    if(action.type==='Inc'){
        
        return {...state,count:state.count+1,bill:+(state.bill)+(action.payload.price)}
    }
    if(action.type==='Dec'){

        return {...state,count:state.count-1,bill:(state.bill)-(action.payload.price)}
    }

    if(action.type==='saveLater'){
        return {...state,saveLater:state.saveLater=true}
    }

    return state
}

export default productReducer