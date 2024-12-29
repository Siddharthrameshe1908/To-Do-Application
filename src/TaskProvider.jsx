import React, { createContext, useEffect, useState } from 'react'
import {v4 as uuidv4} from 'uuid';

export let TaskContext = createContext()
const TaskProvider = (props) => {

    let [state,setState] = useState({
        task : "",
        category : "",
    })


    let handleChange = (event) => {
        let {name,value} = event.target 
        setState({...state,[name]:value})
    }

    let getLocalItem = () => {
        let list = localStorage.getItem("list")
        if (list){
            return JSON.parse(list)
        }
        else{
            return []
        }
    }

    let [data,setData] = useState(getLocalItem)

    let addTask = (task,category) => {
        setData([...data,{task,category,id:uuidv4()}])
    }

    useEffect(()=>{
        localStorage.setItem("list",JSON.stringify(data))
    },[data])

    console.log(data);
    
    let [selectingCategory,setSelected] = useState({
        selectedCategory : 'all'
    })

    let handleCategory = (event) => {
        let {name,value} = event.target 
        setSelected({[name]:value})
    }

    let handleDelete = (x) => {
        let remainingitem = data.filter((item) => item.id != x)
        setData(remainingitem)
    }

    let handleEdit = (y) => {
        let remainingitem = data.filter((item) => item.id != y)
        let edititem = data.find((item) => item.id == y) 
        setData(remainingitem)
        setState(edititem)
    }

  return (
    <TaskContext.Provider value={{state,handleChange,addTask,setState,data,selectingCategory,setSelected,handleCategory,handleDelete,handleEdit}}>
        {props.children}
    </TaskContext.Provider>
  )
}

export default TaskProvider