import React from "react";
import { connect } from "react-redux";
import { Increment,Decrement,Reset } from "./store/Reducers/action";
function Counter(props){
    function handleInc(){
        props.Inc()
    }
    function handleDec(){
        props.Dec()
    }
    function handleReset(){
        props.Res()
    }
    console.log('Counter Rendered');
    return(
        <div className="border border-primary p-2 m-2">
            <h1 className="border p-2 m-1">Counter : {props.count}</h1>
            <button className="btn btn-secondary m-1" onClick={()=>{handleInc()}}>Increment</button>
            <button className="btn btn-secondary m-1" onClick={()=>{handleDec()}}>Decrement</button>
            <button className="btn btn-secondary m-1" onClick={()=>{handleReset()}}>Reset</button>
        </div>
    )
}

function mapStateToProps(state){
    return state.c
}
function mapDispatchToProps(dispatch){
    return {
        Inc:()=>{dispatch(Increment())},
        Dec:()=>{dispatch(Decrement())},
        Res:()=>{dispatch(Reset())}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Counter)