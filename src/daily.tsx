import { Route, Routes } from "react-router-dom";
import Home from "./page/main/Home";

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