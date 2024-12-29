import React from 'react'
import Listform from './Listform'
import SideCategory from './SideCategory'
import DisplayList from './DisplayList'
import TaskProvider from './TaskProvider'
import Navbar from './Navbar'

const App = () => {
  return (
    <>
        <Navbar/>
        <TaskProvider>
        <main className='maintag'>
            <SideCategory/>
            <Listform/>
            {/* <DisplayList/> */}
        </main>
        </TaskProvider>
    </>
  )
}

export default App