import React, {useState} from "react";
import Grid from '@material-ui/core/Grid';
import ListTodo from "./Components/listTodo";
import {Button, TextField} from "@material-ui/core";
import CompletedTodo from "./Components/completedTodo";
import IncompletedTodo from "./Components/incompletedTodo";
import "./App.css"
import {useTodoStore} from "./ContextProvider/todoContext";
import {Observer} from "mobx-react"

const App = () =>{

    const todoStore = useTodoStore()

    const [value, setValue] = useState("")

  return(
      <Observer>

          {()=>{
              return(
                  <div className="App">
                      <div className="input-todo">
                          <TextField value={value} id="outlined-basic" label="Add Todo" variant="outlined" size="small" onChange={(e)=>setValue(e.target.value.trim())}/>
                          <Button variant={"contained"} color={"primary"}
                                  onClick={()=>{
                                      if(value !== ""){
                                          todoStore.addTodo(value)
                                      }
                              setValue("")
                          }}>Add</Button>
                      </div>
                      <Grid container spacing={3}>
                          <Grid item xs={6}>
                              <ListTodo/>
                          </Grid>
                          <Grid item xs={3}>
                                  <CompletedTodo/>
                          </Grid>
                          <Grid item xs={3}>
                              <IncompletedTodo/>
                      </Grid>
                      </Grid>
                  </div>
              )
          }}

      </Observer>
  )
}

export default App
