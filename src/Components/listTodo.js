import React from "react";
import {Observer,useObserver} from "mobx-react"
import {useTodoStore} from "../ContextProvider/todoContext";


const ListTodo = ()=>{
    const todoStore = useTodoStore()
    return useObserver(()=>{
                return(
                    <div className="list">
                        <h4>List</h4>
                        <h5>Remaining</h5>
                        <ul style={{minHeight:"20vh"}}>
                            {todoStore.todoList.map(el=>{
                                if(!el.done){
                                    return(
                                        <li key={el.id} className="item remaining">
                                            <p>{el.content}</p>
                                        </li>
                                    )
                                }
                                else{
                                    return null
                                }
                            })}
                        </ul>
                        <h5>Done</h5>
                        <ul style={{minHeight:"20vh"}}>
                            {todoStore.todoList.map(el=>{
                                if(el.done){
                                    return(
                                        <li key={el.id} className="item done">
                                            <p>{el.content}</p>
                                        </li>
                                    )
                                }
                                else{
                                    return null
                                }
                            })}
                        </ul>
                    </div>
                )
            }

    )
}

export default ListTodo