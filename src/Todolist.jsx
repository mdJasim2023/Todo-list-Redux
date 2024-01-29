import React from "react";
import { connect } from "react-redux";
import { ADDTASK,DELETE } from "./store/Reducers/action";

function Todolist(props){
    let [to,setTo] = React.useState('')
    let ref = React.useRef()
    console.log('Todolist Render');
    function handleAdd(){
        ref.current.value=''
        props.addtask(to)
    }
    return(
        <div className="border border-2 border-info p-3 m-2">
            <h1 className="border p-2">TodoList</h1>
            <input ref={ref}  type="text" onChange={(e)=>{setTo(e.target.value)}}/>
            <button onClick={()=>{handleAdd(to)}} className="btn btn-success">AddTask</button>
            <ul className="m-2 p-2">
                {
                    props.todos.map((todo,ind)=>{
                        return(
                            <div>
                                <li className="list-group-item border p-1 m-2 w-50 d-flex flex-wrap justify-content-around">
                                    <b className="text-info d-flex align-self-center">{todo}</b>
                                    <button className="btn btn-danger" onClick={()=>{props.delete(ind)}}>Delete</button>
                                    </li>
                            </div>
                        )
                    })
                }
            </ul>
        </div>
    )
}
function mapStateToProps(state){
    return state.t
}
function mapDispatchToProps(dispatch){
    return{
        addtask:(to)=>{dispatch(ADDTASK(to))},
        delete:(ind)=>{dispatch(DELETE(ind))}
    }
}


export default connect(mapStateToProps,mapDispatchToProps) (Todolist)