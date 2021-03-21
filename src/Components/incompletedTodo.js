import React from "react";

import {useTodoStore} from "../ContextProvider/todoContext";
import {Button} from "@material-ui/core";
import {Observer} from "mobx-react"

const IncompleteTodo = ()=>{
    const todoStore = useTodoStore()

    return(
        <Observer>
            {()=>{
                return(
                    <div className="incomplete">
                        <h4>Remaining Tasks</h4>
                        <ul>
                            {todoStore.todoList.map((el,index)=>{
                                if(!el.done){
                                    return(
                                        <li key={el.id} className="item">
                                            <p>{el.content}</p>
                                            <Button variant={"outlined"} color={"primary"}
                                                    onClick={()=>{
                                                        todoStore.complete(el)
                                                    }}
                                                    size={"small"}
                                            >Done</Button>
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
            }}
        </Observer>


    )
}

export default IncompleteTodo