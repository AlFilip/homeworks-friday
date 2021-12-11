import React from 'react'
import './App.css'
import { MyRoutes } from './common/Components/MyRoutes/MyRoutes'
import Header from './Components/Header/Header'


function App() {
    const vlas = 'vlas'
    return (
        <>
            <Header/>
            <MyRoutes/>
        </>
    )
}

export default App
