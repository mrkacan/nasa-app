import React, {useEffect} from 'react';
import {Route, Routes} from "react-router-dom";
import './App.css';
import Search from "./pages/Search/Search";
import Show from "./pages/Show/Show";
import 'antd/dist/antd.css';

function App() {
    return (
        <div className="w-screen h-full bg-gray-100">
        <div className="container px-4 mx-auto bg-white h-full">
            <Routes>
                <Route path="/" element={<Search/>}/>
                <Route path="show">
                    <Route path=":id" element={<Show/>}/>
                </Route>
            </Routes>
        </div>
        </div>
    );
}

export default App;
