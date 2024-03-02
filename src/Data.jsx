import { connect } from "react-redux";
import React from "react";

function Data(props){
    console.log(props.cart);
    return(
        <div>
            {
                props.cart?.map((data)=>{
                    return(
                        <div>
                            <h1>Username : {data.username}</h1>
                            <h1>Password : {data.password}</h1>
                            <h1>Mobile Number : {data.mobile}</h1>
                            <h1>Email : {data.email}</h1>
                        </div>
                    )
                })
            }
        </div>
    )
}


export default connect(store=>store) (Data)