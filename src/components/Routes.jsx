import {Route,Routes} from "react-router-dom";
import {HomePage} from "./Home";
import { AddCity } from "./AddCity";
import {AddCountry} from "./AddCountry";

export const RoutesBox=()=>{
    return (
        <>
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/add-city" element={<AddCity/>}/>
            <Route path="/add-country" element={<AddCountry/>}/>
        </Routes>
        </>
    )
}