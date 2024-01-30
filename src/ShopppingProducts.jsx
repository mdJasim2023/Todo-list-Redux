import { connect } from "react-redux";
import React from "react";
import './App.css'
import { Link } from "react-router-dom";

function ShoppingProducts(props){
    console.log(props);
    let [srch,setSrch] = React.useState('')
    return(
            <div>   
                <h1 className="text-center text-warning">MY-CART</h1>
                <div className="m-3 d-flex">
                    <input type="text" className="form-control w-50 d-flex align-self-center justify-content-around position-sticky top-0" placeholder="Search Products" onChange={(e)=>{props.dispatch({type:'Search',payload:e.target.value})}}/>
                    <Link to='./addcart'><h3 class="bi bi-cart position-relative"><p id="cartlogo" className="w-75 text-center position-absolute top-0 start-100 translate-middle  rounded-circle">{props.cart.length}</p></h3></Link>
                </div>
                <div className="d-flex flex-wrap m-5">
                {
                    props.searchedproducts.map((data,i)=>{
                        return (
                            <div className="border p-2 rounded" id="main">
                                <div className="">
                                    <img src={data.image} alt="" width='50%' />
                                </div>
                                <div className="m-2">
                                    <h4>{data.title}</h4><br />
                                    <b>Category : {data.category}</b><br /><br />
                                    <span className="btn btn-success">{data.rating.rate} Rating</span>&nbsp;&nbsp;&nbsp;
                                    <span>{data.rating.count} Reviews</span><br />
                                    <b>Description</b>
                                    <p>{data.description.slice(0,150)}</p>
                                    <h1>${data.price}</h1>
                                    
                                    <button className="btn btn-warning" id="addbtns" disabled={data.inCart}   onClick={()=>{props.dispatch({type:'ADDCART',payload:data,index:i})}}>Add To Cart</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>  
    )
}

export default connect(store=>store) (ShoppingProducts)