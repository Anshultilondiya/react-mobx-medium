import React, {createContext, useContext} from 'react'

import {createTodoStore} from "../Store/store";

import { useLocalObservable } from 'mobx-react';

const TodoContext = createContext(null)

export const TodoProvider = ( {children} ) =>{
    const todoStore = useLocalObservable(createTodoStore)

    return(
        <TodoContext.Provider value={todoStore}>{children}</TodoContext.Provider>
    )
}
export const useTodoStore = () => useContext(TodoContext)
