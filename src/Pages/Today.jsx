import React, { useContext,useState } from 'react'
import { WeatherReport } from '../Datas/ContextApi'
import { weImages } from '../Datas/WeatherImages'
import { timeDates } from '../Datas/Datetime'

import { TempContext } from '../Datas/Convert'
import {
  getUVLabel,
  getHumidityLabel,
  getVisibilityLabel,
  getWindLabel,
  getCloudLabel
} from "../Datas/Utilites"


export default function Today() {
  const {hours}=useContext(WeatherReport)

   const { weconditi } = useContext(weImages)
  
    const { getDayName, formatTime } = useContext(timeDates)
   
    const [selected,setSelected]=useState(0);
   const selectedIndex=hours[selected]

   const {unit,convertTemp}=useContext(TempContext);
  return (
    <>
          <div className="grid xl:grid-cols-8 md:cols-5 sm:cols-3  gap-5 ps-4 ">
            {hours.map((wek,index) =>
              <div 
              key={index}
              onClick={()=>setSelected(index)}
              className="border p-2 flex-1 
              justify-content-center
               rounded items-center"
              >
                <h2 className="text-3xl pl-2 pb-2">{formatTime(wek.datetime)}</h2>
                <div className="pb-3"><img src={weconditi(wek.conditions)} alt={wek.conditions}
                className="sm:w-100 md:-w-200 xl:w-300"
                /></div>
                <div><p className="text-2xl">{convertTemp(wek.temp)}°{unit}</p></div>
              </div>
    
            )}
    
          </div>
          <h1 className="text-5xl p-5 mb-10">Todays Highlights</h1>
          <div className=" grid gap-4 p-2 grid-cols-3 md:grid-col-1 justify-content-center">
    
            {selectedIndex && (
            <>
            <div className="border  rounded-md m-2 pl-2 pt-2 bg-gray-100  flex flex-col justify-content-center">
              <h4 className="text-3xl text-gray-400"         >UV-Index</h4>
              <h2 className="text-5xl text-black text-center">{ selectedIndex.uvindex}</h2>
              <p  className="text-2xl"                       >{getUVLabel(selectedIndex.uvindex)}</p>
            </div>
            <div className="border border-1  m-2 pl-2 pt-2 bg-gray-100 rounded-md  ">
              <h4 className="text-3xl text-gray-400"         >Wind Status</h4>
              <h2 className="text-2xl text-black text-center">{selectedIndex.windspeed}</h2>
              <p  className="text-2xl"                       >{getWindLabel(selectedIndex.windspeed)}</p>
            </div>
            <div className="border border-1 m-2 pl-2 pt-2 bg-gray-100 rounded-md  ">
              <h4 className="text-3xl text-gray-400"          >Sunrise & Sunset</h4>
              <h2 className="text-2xl text-black text-center">{ formatTime(selectedIndex.sunrise)}</h2>
              <p  className="text-2xl"                       > { formatTime(selectedIndex.sunset)}</p>
            </div>
            <div className="border border-1 m-2 pl-2 pt-2 bg-gray-100 rounded-md ">
              <h4 className="text-3xl text-gray-400"         >Humidity</h4>
              <h2 className="text-2xl text-black text-center">{selectedIndex.humidity}</h2>
              <p  className="text-2xl"                       >{getHumidityLabel(selectedIndex.humidity)}</p>
            </div>
            <div className="border border-1 m-2 pl-2 pt-2 bg-gray-100 rounded-md  ">
              <h4 className="text-3xl text-gray-400"         >Visibility</h4>
              <h2 className="text-2xl text-black text-center">{selectedIndex.visibility}</h2>
              <p  className="text-2xl"                       >{getVisibilityLabel(selectedIndex.visibility)}</p>
            </div>
            <div className=" border border-1 m-2 pl-2 pt-2 bg-gray-100 rounded-md  ">
              <h4 className="text-3xl text-gray-400"         >Air Quality</h4>
              <h2 className="text-2xl text-black text-center">{selectedIndex.windgust}</h2>
              <p  className="text-2xl"                       >{getCloudLabel(selectedIndex.windgust)}</p>
            </div>
            </>
            )}
          </div>
            <div className="flex items-center  p-2 flex-item-center flex-row justify-center pt-10">
        <p className="lg:text-xl  md:text-md sm:text-sm">Weather Prediction App By:-</p><span className="font-bold xl:text-2xl md:text-md sm:text-sm">S.Raghavendra</span>
      </div>
    
        </>
    
  )
}
