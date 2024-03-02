import { connect } from "react-redux";
import React from "react";

function Data(props){
    console.log(props.cart);
    return(
        <div className="ddd">
            {
                props.cart?.map((data)=>{
                    return(
                        <div className="data">
                            <h4><b>Username</b> : {data.username}</h4>
                            <h4><b>Password </b>: {data.password}</h4>
                            <h4><b>Mobile Number</b> : {data.mobile}</h4>
                            <h4><b>Email </b>: {data.email}</h4>
                        </div>
                    )
                })
            }
        </div>
    )
}


export default connect(store=>store) (Data)