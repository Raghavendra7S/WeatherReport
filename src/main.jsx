import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom"
import ContextApi from './Datas/ContextApi.jsx'
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import WeatheImages from './Datas/WeatherImages'
import Datetime from './Datas/Datetime.jsx'
import { TempProvider } from './Datas/Convert.jsx'
createRoot(document.getElementById('root')).render(

    <BrowserRouter>


        <ContextApi>
            <WeatheImages>
                <Datetime>
                
                    <App />
                
                </Datetime>
            </WeatheImages>
        </ContextApi>

    </BrowserRouter>

)
