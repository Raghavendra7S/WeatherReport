import React,{useState,useContext, createContext} from 'react'
import { WeatherReport} from "/src/Datas/ContextApi"

export const weImages=createContext()

export default function WeatheImages({children}) {
  // const [condit,setConditi]= useState("")
   

  const {wedata}=useContext(WeatherReport)

  const weCondition ={
  partlycloudyday: "https://i.ibb.co/PZQXH8V/27.png",
  partlycloudynight:"https://i.ibb.co/Kzkk59k/15.png",
  rain:"https://i.ibb.co/kBd2NTS/39.png",
  clear:"https://i.ibb.co/rb4rrJL/26.png",
  clearnight:"https://i.ibb.co/1nxNGHL/10.png",
  defaults:"https://i.ibb.co/rb4rrJL/26.png"
  }
 

 
function weconditi(condition){
   if (!condition) return weCondition.defaults;

  const c = condition.toLowerCase();

  if (c.includes("rain")) return weCondition.rain;
  if (c.includes("cloud")) return weCondition.partlycloudyday;
  if (c.includes("clear") && c.includes("night")) return weCondition.clearnight;
  if (c.includes("clear")) return weCondition.clear;

  return weCondition.defaults;

}

  return (
    <div>
      {/* <img src={weconditi(wedata?.conditions)} alt="weather"/>
      {console.log(wedata.conditions)} */}
      <weImages.Provider value={{weconditi}}>
        {children}
      </weImages.Provider>
    </div>
  )
}

  