import React from 'react'
import SideBar from './Component/SideBar'

import Header from './Component/Header'

import Cards from './Component/Cards'
import GridsLayouts from './Layouts/GridsLayouts'
import { TempProvider } from '../src/Datas/Convert.jsx'




export default function App() {
  return (
    <div>
 <TempProvider>
 <GridsLayouts/>
 </TempProvider>
{/* <SideBar/> */}
 {/* <Cards/> */}


    </div>
  )
}
