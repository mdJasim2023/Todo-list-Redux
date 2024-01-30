import { connect } from "react-redux";
import React from "react";
import './App.css'
import { Link } from "react-router-dom";
function AddCarts(props){
    const handleInc = ()=>{
        props.dispatch({type:'Inc'})
    }
    return(
        <div className="m-5">
             <h1>Shopping Cart ( {props.cart.length} )</h1>
             <hr />
            <div className="w-70 p-5 d-flex flex-wrap justify-content-between">
                    <div>
                        {
                            props.cart.map((cartItems,i)=>{
                                return(
                                    <>
                                        <div className="w-75 p-3">
                                            <img src={cartItems.image} width='80px' alt="" />
                                            <h4>{cartItems.title}</h4>
                                            <b>Price :  ${cartItems.price}</b><br /><br />
                                            <button className="btn btn-danger" onClick={()=>{props.dispatch({type:'Dec'})}}>-</button>
                                                <span><b> {props.count} </b></span>
                                            <button className="btn btn-success" onClick={()=>{handleInc()}}>+</button>
                                        </div>
                                        &nbsp;&nbsp;&nbsp;&nbsp;<button className="btn btn-danger" onClick={()=>{props.dispatch({type:'Delete',index:i})}}>Delete</button>
                                        &nbsp;&nbsp;&nbsp;&nbsp;<button className="btn btn-info">Save Later</button>
                                        <hr />
                                    </>
                                )
                            })
                        }
                    </div>

                    <div className="p-2" id='pricebox'>
                        {props.addCart && <section className="p-3  position-sticky top-0">
                            <h4 className="text-center">TOTAL PRICE</h4><br />
                            <h6 className="text-success">&#x2713;Your order is eligible for FREE Delivery.</h6>
                            <h4>Subtotal ( {props.cart.length} ) : <b className="text-danger"> $ {props.bill} </b></h4>
                            <button className="btn btn-warning form-control">Proceed to Buy</button>
                        </section>}
                    </div>
            </div>
            {!props.addCart &&
            <div className="text-center">
                <h1 style={{fontSize:'100px',color:'darkgoldenrod'}}>MY-CART is EMPTY</h1><br />
                <Link to='/'><button className="btn btn-primary p-3 w-25">Continue Shopping</button></Link>
            </div>}
        </div>
    )
}

export default connect(store=>store)(AddCarts)