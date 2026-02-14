import React, { useContext } from 'react'
import HeaderLayout from './HeaderLayout'
import { WeatherReport } from '../Datas/ContextApi'
import SideBar from '../Component/SideBar'
import RotesWeather from '../Component/RotesWeather'
import { Outlet } from 'react-router-dom'







export default function GridsLayouts() {
  const { loading } = useContext(WeatherReport)

  if(loading){
    return(
      <div className="h-screen flex justify-center items-center bg-blue-100">
        <h1 className="border border-4 rounded-full p-10 bg-gray-300 text-4xl text-red-500">Loading Weather...</h1>
      </div>

    )
  }
  return (
    <>
      <div className="flex flex-row">
        <div className="flex min-h-screen">
          <aside className=" sm:max-w-sm md:max-w-md xl:max-w-lg sm:p-2 md:p-4 lg:p-6 flex flex-col bg-gray-100  max-w-sm">
            <SideBar />

          </aside>
        </div>

        <div className="flex  flex-col flex-1">

          <header className="h-30 p-2">

            <HeaderLayout />
              </header>
          
         
            <main className=" flex-1 p-4">

              <RotesWeather />
              <Outlet/>


            </main>
     


        </div>







      </div>


    </>
  )
}
