import React, { useContext } from 'react'
import { TaskContext } from './TaskProvider'

const DisplayList = () => {

    let items = useContext(TaskContext)

    let {data,selectingCategory,handleDelete,handleEdit} = items

    let {selectedCategory} = selectingCategory
    
  return (
    <>
        <section className='displaylist'>
        <h1>Your Task are in the List</h1>
        <div className='allitems' >
        {
        data.map((item) => {
                return selectedCategory == 'all' ? (
                    <div className='individualtask' key={(item.id)}>
                        <h2>Task : {item.task}</h2>
                        <h3>Category : {item.category}</h3>
                        <div className='buttons'>
                        <button onClick={() => handleDelete(item.id)}>Delete</button>
                        <button onClick={() => handleEdit(item.id)}>Edit</button>
                        </div>
                    </div>
                ) : (
                    selectedCategory == item.category && (
                    <div className='individualtask' key={(item.id)}>
                        <h2>Task : {item.task}</h2>
                        <h3>Category : {item.category}</h3>
                        <div className='buttons'>
                        <button onClick={() => handleDelete(item.id)}>Delete</button>
                        <button onClick={() => handleEdit(item.id)}>Edit</button>
                        </div>
                    </div>
                    )
                )
            })
        }
        </div>
        </section>
    </>
  )
}

export default DisplayList