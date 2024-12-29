import React, { useContext, useState } from 'react'
import { TaskContext } from './TaskProvider';


const Listform = () => {

    let items = useContext(TaskContext)
    // console.log(items);

    let {state,handleChange,addTask,setState} = items 
    
    let {task,category} = state

    let [error,setError] = useState({})

    let handleSubmit = (event) => {
        event.preventDefault()

        let validatingError = {}

        if (task == ""){
            validatingError.task = "*This is a required field"
        }
        if (category == ""){
            validatingError.category = "*This is required field"
        }
        if(task!="" && category != ""){
            addTask(task,category)
            setState({task:"",category:""})
        }

        setError(validatingError)
    }
  return (
    <>
        <section className="mainform">
            <h1>Make your Daily Task</h1>
            <form className='form'>
                <div className="form-group">
                    <label htmlFor="">Add your task</label>
                    {/* <input type="text" name='task' value={task} onChange={handleChange}/> */}
                    <textarea rows='5' cols='5' name="task" value={task} onChange={handleChange}></textarea>
                    <div>
                        {error.task && <span>{error.task}</span>}
                    </div>
                </div> 
                <div className="form-group">
                    <label htmlFor="">Select the category</label>
                    <select name='category' value={category} onChange={handleChange}>
                        <option value="">--Select--</option>
                        <option value="General">General</option>
                        <option value="Important">Important</option>
                        <option value="Dailytask">Daily Task</option>
                    </select>
                    <div>
                        {error.category && <span>{error.category}</span>}
                    </div>
                </div>
                <div className="formbtn">
                    <button onClick={handleSubmit}>Submit</button>
                </div>
            </form>
        </section>
    </>
  )
}

export default Listform