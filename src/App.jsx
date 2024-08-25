import React from 'react'
import LeftNavBar from './components/LeftNavBar'
import UpperNavBar from './components/UpperNavBar'
import Content from './components/Content'

function App() {
  return (

    <>
    <div className=' bg-white flex w-screen h-screen'>
      <LeftNavBar/>
      <div className='flex flex-col w-full h-screen'>
        <UpperNavBar/>
        <Content/>
      </div>

    </div>
    </>

  )
}

export default App