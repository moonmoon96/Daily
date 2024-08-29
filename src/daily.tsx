import { Route, Routes } from "react-router-dom";
import Home from "./page/home";

function Daily () {
    return(
        <>
            <Routes>
                <Route path="/" element={<Home />}/>
            </Routes>
        </>
    )
}

export default Daily;