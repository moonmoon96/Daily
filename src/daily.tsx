import { Route, Routes } from "react-router-dom";
import Home from "./page/main/Home";
import Char from "./page/character/Char";

function Daily () {
    return(
        <>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/char" element={<Char />}/>
            </Routes>
        </>
    )
}

export default Daily;