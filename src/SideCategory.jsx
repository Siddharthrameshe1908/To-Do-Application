import React, { useContext } from 'react'
import { TaskContext } from './TaskProvider'
import DisplayList from './DisplayList'

const SideCategory = () => {

    let items = useContext(TaskContext)

    let {data,selectingCategory,handleCategory,handleDelete,handleEdit} = items 
    
    let {selectedCategory} = selectingCategory
    // console.log(selectingCategory);
    // console.log(selectedCategory);
    console.log(data);

  return (
    <>
        <div className="sidecategory">
            <h1>Select the category</h1>
        <aside>
            <div className="selectcategory" name='selectedCategory' value={selectedCategory} onChange={handleCategory} >
                <div className='categories'>
                    <input type="radio" name='selectedCategory' value="all" id='alltask' defaultChecked/><label htmlFor="alltask">All Task</label>
                </div>
                <div className='categories'>
                    <input type="radio" name='selectedCategory' value="General" id='general'/><label htmlFor="general">General </label>
                </div>
                <div className='categories'>
                    <input type="radio" name='selectedCategory' value="Important" id='important'/><label htmlFor="important">Important </label>
                </div>
                <div className='categories'>
                    <input type="radio" name='selectedCategory' value="Dailytask" id='dailytask'/><label htmlFor="dailytask">Daily Task</label>
                </div>
            </div>
        </aside>

        </div>
        {
            data.length == 0  ? <div className='notask'><h1>No Task Added</h1></div> : <DisplayList value={selectedCategory}/>
        }
    </>
  )
}

export default SideCategory

