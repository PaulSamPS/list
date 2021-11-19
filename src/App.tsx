import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import {Main} from './pages/Main/Main'
import {NotFound} from "./components"
import Detail from './pages/Detail/Detail'


const App = (): JSX.Element => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main/>} />
                <Route path="detail/:account/:terminal/:order/:status/:date" element={<Detail/>}/>
                <Route path="*" element={<NotFound/> }/>
            </Routes>
        </BrowserRouter>
    )
}

export default App
