import React from "react";
import {useTodoStore} from "../ContextProvider/todoContext";
import {Button} from "@material-ui/core";
import {Observer} from "mobx-react"

const CompletedTodo = ()=>{
    const todoStore = useTodoStore()
    return(
        <Observer>
            {()=>{
                return(
                    <div className="complete">
                        <h4>Finished Task</h4>
                        <ul>
                            {todoStore.todoList.map(el=>{
                                if(el.done){
                                    return(
                                        <li key={el.id} className="item">
                                            <p>{el.content}</p>
                                            <Button variant={"outlined"} color={"secondary"}
                                                    onClick={()=>{
                                                        todoStore.incomplete(el)
                                                    }}
                                                    size={"small"}
                                            >Undo</Button>
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

export default CompletedTodo