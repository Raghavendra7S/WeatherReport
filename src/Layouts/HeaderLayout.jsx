import React,{useContext} from 'react'
import { Link } from 'react-router-dom'
import { TempContext } from '../Datas/Convert'


export default function HeaderLayout() {
  const {unit,setUnit}=useContext(TempContext);
  return (
    <>
    <div className="bord">
        <section className="flex p-2 justify-between items-center">
           <div className="daysWeek flex gap-4">
            <Link to="/Today"> 
             <h2 className="text-sm md:text-lg lg:text-4xl">Today</h2>
             </Link>
             <Link to="/Week">
              <h2 className="text-sm md:text-lg lg:text-4xl">Week</h2>
           </Link>
           </div>
           <div className="flex gap-5 pr-5">
             <div className=""> 
              
              <button onClick={()=>setUnit("F")}

             className={`text-sm md:text-lg lg:text-4xl cursor-pointer
             hover:border-3 hover:rounded-full 
             hover:border-blue-500 
             hover:bg-gray-200 
              hover:p-4 hover:text-black hover:text-bolder
             ${unit==="F"?"":""}`}>°F</button></div>
             <div className="">
              <button onClick={()=>setUnit("C")}
              
              className={`text-sm md:text-lg lg:text-4xl cursor-pointer hover:border-3 hover:rounded-full hover:border-blue-500 hover:bg-gray-200  hover:p-4 hover:text-black hover:text-bolder
               ${unit==="C"?"":""}`}>°C</button></div>
           </div>
         
        </section>
    </div>
    </>
  )
}
