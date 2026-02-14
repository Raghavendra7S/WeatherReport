
import { createContext,useState } from "react";

export const TempContext=createContext();

export function TempProvider({children}){
    const [unit,setUnit]=useState("C");

     function convertTemp(temp) {
    if (unit === "F") {
      return ((temp * 9) / 5 + 32).toFixed(1);
    }
    return temp;
  }

  return (
    <TempContext.Provider value={{unit,setUnit,convertTemp}}>
        {children}
    </TempContext.Provider>
  )
}
