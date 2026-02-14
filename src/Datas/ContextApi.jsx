import React,{useState,createContext,useEffect,useContext} from 'react'

export const WeatherReport=createContext();

export default function ContextApi({children}) {

  const [wedata,setWedata]=useState([]);
  const [days,setDays]=useState([]);
  const [hours,setHours]=useState([])
  const [weeks,setWeeks]=useState([])
   const [maindata,setmaindata]=useState({})

  async function FecthData(city){
    console.log("api city",city)
   const url=`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=EJ6UBL2JEQGYB3AA4ENASN62J&contentType=json`

    try{
      const wrp=await fetch(url)
      const wrpData= await wrp.json()
      console.log("wrpdata",wrpData)
      setmaindata(wrpData)
     
     
      setWedata(wrpData.currentConditions)
      setDays(wrpData.days)
      
      setHours(wrpData.days[0].hours)
      setWeeks(wrpData.days.slice(0,7))

      }
      catch{
        console.log("Data is not Fetch")

      }
      

  }
  useEffect(()=>{
  FecthData("bangalore")

  },[])

  return (
    <>
    
    {/* {maindata.resolvedAddress && (
      <h1>place:{maindata.resolvedAddress}</h1>
    )} */}
    
    <WeatherReport.Provider
 
       value={{ 
         wedata,
         days,
       hours,
       weeks,
       maindata,
        FecthData
       }}
      > {console.log("wedata",wedata)
        }
       {children}
    </WeatherReport.Provider>
    </>
  )
}
