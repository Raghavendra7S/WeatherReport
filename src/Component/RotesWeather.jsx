import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Today from '../Pages/Today'
import Week from '../Pages/Week'
export default function RotesWeather() {
  return (
    <div>
      <Routes>
        <Route path="/Today" element={<Today/>}/>
        <Route path="/Week" element={<Week/>}/>
     </Routes>
    </div>
  )
}
