import React, { useState, useContext } from 'react'
import { BsSearch } from "react-icons/bs";
import { WeatherReport } from "/src/Datas/ContextApi"
import { weImages } from '../Datas/WeatherImages';
import { timeDates } from '../Datas/Datetime'

import { TempContext } from '../Datas/Convert'

export default function SideBar({ }) {
  const [city, setCity] = useState("")


  const { FecthData } = useContext(WeatherReport)
  const { wedata } = useContext(WeatherReport)

  const { weconditi } = useContext(weImages)
   const { maindata } = useContext(WeatherReport)

  const { getDayName, formatTime } = useContext(timeDates)

    const {unit,convertTemp}=useContext(TempContext);

  function handleSearch(e) {
    e.preventDefault()
    console.log("clicked")
    if (!city) return
    FecthData(city)
  }
  console.log("handlesearch", handleSearch)
  return (
<>
      <div className="flex-1 flex-col">
        <div className=" h-40 m-5 flex items-center">
          <form className="flex  max-w-sm form-control">
            <input
              type="serach"
              placeholder='city Name'
              value={city}
              className="from-control border rounded-tl-lg rounded-bl-lg md:word-break lg:p-4 md:p-4 md:w-60 lg:w-90"
              onChange={(e) => setCity(e.target.value)}
            />
            <button onClick={handleSearch} className='border border-3 text-3xl sm:p-2 md:p-4 lg:p-6'><BsSearch /></button>
          </form>
        </div>
        <div className="">
          <div className="img max-w-sm max-w-md md:p-2 md:p-4 lg:p-6">
            <img src={weconditi(wedata.conditions)} alt={wedata.conditions}
              className="md:w-250 sm:w-125 lg:w-500" />
          </div>
          <p className="md:text-1xl sm:text-2xl lg:text-6xl 
         lg:pt-6 md:pt-4 sm:pt-2 sm:pl-2 md:pl-4 lg:pl-5">{convertTemp(wedata.temp)}°{unit}</p>
          <div>
            <div>
              <h1 className="md:text-xl sm:text-2xl lg:text-3xl 
         lg:pt-6 md:pt-4 sm:pt-2 sm:pl-2 md:pl-4 lg:pl-5">{formatTime(wedata.datetime)}</h1>
            </div>
            <div className="border-t-1 border-gray-900">
              <p className="md:text-md sm:text-1xl lg:text-2xl 
         lg:pt-6 md:pt-4 sm:pt-2 sm:pl-2 md:pl-4 lg:pl-5">Condition:{wedata.conditions}</p>
              <p className="md:text-md sm:text-1xl lg:text-2xl 
         lg:pt-6 md:pt-4 sm:pt-2 sm:pl-2 md:pl-4 lg:pl-5">perc:{wedata.precip}</p>
            </div>

       </div>
     

        </div>
 
      
      </div>
       <div className="p-4  mt-auto text-center ">
           <h1 className="xl:text-1xl md:text-xl sm:text-md">place:{maindata.resolvedAddress}</h1>
        </div>
      </>









      )
}

