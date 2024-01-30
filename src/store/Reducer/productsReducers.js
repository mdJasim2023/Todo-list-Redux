import products from "./products"

let initialState = {
    allproducts:products,
    searchedproducts:products,
    cart:[],
    bill:0,
    addCart:false,
}
const productReducer = (state=initialState,action)=>{
    if(action.type==='ADDCART'){
        let temp=[...state.allproducts]
        temp=temp.map((a)=>{
            if(a.title===action.payload.title)
            {
                a.inCart=true
                a.Cartcount=1
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
                a.title.includes(action.payload)
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
        let temp=[...state.cart]
        ++temp[action.payload].Cartcount
        return {...state,bill:+(state.bill)+(+(action.payload.price)*+(temp[action.payload].Cartcount)),cart:[...temp]}
    }
    if(action.type==='Dec'){
        let temp=[...state.cart]
        --temp[action.payload].Cartcount
        return {...state,bill:+(state.bill)-(action.payload.price*temp[action.payload].Cartcount),cart:[...temp]}
    }
    return state
}

export default productReducer