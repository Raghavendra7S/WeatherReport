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
export default function Week() {

  const { weeks } = useContext(WeatherReport)
  const { weconditi } = useContext(weImages)

  const { getDayName, formatTime } = useContext(timeDates)
 
  const [selected,setSelected]=useState(0);
 const selectedIndex=weeks[selected]

 const {unit,convertTemp}=useContext(TempContext);
  return (
    <>
      <div className="grid xl:grid-cols-7 md:cols-3 sm:cols-1 gap-2 md:wrap">
        {weeks.map((wek,index) =>
          <div 
          key={index}
          onClick={()=>setSelected(index)}
          className="bg-white p-2 flex-1 
          justify-content-center
           rounded items-center cursor-pointer"
          >
            <h2 className="xl:text-1xl lg:overflow-clip pl-2 pb-2 ">{getDayName(wek.datetime)}</h2>
            <div className="pb-3"><img src={weconditi(wek.conditions)} alt={wek.conditions} 
            className="sm:w-100 md:-w-100 xl:w-200"
            /></div>
            <div><p className="xl:text-1xl">{convertTemp(wek.temp)}°{unit}</p></div>
          </div>

        )}

      </div>
      <h1 className="text-5xl p-5 mb-10">Todays Highlights</h1>
      <div className=" grid gap-4 p-2 xl:grid-cols-3 md:grid-cols-1 justify-content-center">

        {selectedIndex && (
        <>
        <div className=" rounded-md m-2 pl-2 pt-2 bg-gray-100 h-50  mt-auto grid gap-7  mt-6">
          <h4 className="text-3xl text-gray-400 pl-3"         >UV-Index</h4>
          <h2 className="text-5xl text-black text-center">{ selectedIndex.uvindex}</h2>
          <p  className="text-1.5xl pl-3 "                       >{getUVLabel(selectedIndex.uvindex)}</p>
        </div>
        <div className="  m-2 pl-2 pt-2 bg-gray-100 rounded-md grid gap-7 h-50 mt-6 ">
          <h4 className="text-3xl text-gray-400"         >Wind Status</h4>
          <h2 className="text-2xl text-black text-center">{selectedIndex.windspeed}</h2>
          <p  className="text-1.5xl"                       >{getWindLabel(selectedIndex.windspeed)}</p>
        </div>
        <div className="  m-2 pl-2 pt-2 bg-gray-100 rounded-md grid gap-7 h-50 mt-6 ">
          <h4 className="text-3xl text-gray-400 pl-3"          >Sunrise & Sunset</h4>
          <h2 className="text-2xl text-black text-center">{ formatTime(selectedIndex.sunrise)}</h2>
          <p  className="text-1.5xl pl-3"                       > { formatTime(selectedIndex.sunset)}</p>
        </div>
        <div className=" m-2 pl-2 pt-2 bg-gray-100 rounded-md grid gap-7 h-50 mt-6 ">
          <h4 className="text-3xl text-gray-400 pl-3"         >Humidity</h4>
          <h2 className="text-2xl text-black text-center">{selectedIndex.humidity}</h2>
          <p  className="text-1.5xl pl-3"                       >{getHumidityLabel(selectedIndex.humidity)}</p>
        </div>
        <div className=" m-2 pl-2 pt-2 bg-gray-100 rounded-md grid gap-7 h-50 mt-6 ">
          <h4 className="text-3xl text-gray-400 pl-3"         >Visibility</h4>
          <h2 className="text-2xl text-black text-center">{selectedIndex.visibility}</h2>
          <p  className="text-1.5xl pl-3"                       >{getVisibilityLabel(selectedIndex.visibility)}</p>
        </div>
        <div className="  m-2 pl-2 pt-2 bg-gray-100 rounded-md grid gap-7 h-50 mt-6 ">
          <h4 className="text-3xl text-gray-400 pl-3"         >Air Quality</h4>
          <h2 className="text-2xl text-black text-center">{selectedIndex.windgust}</h2>
          <p  className="text-1.5xl pl-3"                       >{getCloudLabel(selectedIndex.windgust)}</p>
        </div>
        </>
        )}
      </div>
      <div className="flex items-center  p-2 flex-item-center flex-row justify-center pt-10">
        <p className="xl:text-1.5xl  md:text-md sm:text-sm">Weather Prediction App By:-</p><span className="font-bold xl:text-1.5xl md:text-md sm:text-sm">S.Raghavendra</span>
      </div>

    </>
  )
}
