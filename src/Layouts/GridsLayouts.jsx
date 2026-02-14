import React from 'react'
import HeaderLayout from './HeaderLayout'

import SideBar from '../Component/SideBar'
import RotesWeather from '../Component/RotesWeather'





export default function GridsLayouts() {
  return (
<>
<div className="flex flex-row">
    <div className="flex min-h-screen">
        <aside className=" sm:max-w-sm md:max-w-md lg:max-w-lg sm:p-2 md:p-4 lg:p-6 flex flex-col bg-gray-200  max-w-sm">
      <SideBar/>
     
        </aside>
    </div>

<div className="flex  flex-col flex-1">
   
   <header className="h-30 p-2">
      <HeaderLayout/>
   </header>

   <main className=" flex-1 p-4">

<RotesWeather/>
   </main>
   {/* <footer className=" p-4 h-20">
    hai
   </footer> */}
</div>


   

 
  
 
</div>
<footer>1</footer>

</>
  )
}
