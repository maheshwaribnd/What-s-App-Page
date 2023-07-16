import React from "react";
// import "./style.css";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
// import { Create } from "@mui/icons-material";
import { IoCreateOutline } from "react-icons/io5";

const SearchComponent = ({ search, onChange }) => {
    return (
        <div className="flex ml-4 gap-2">
            <div className="flex items-center w-72 h-fit px-3 py-1 gap-2 rounded-md bg-slate-100">
                <SearchRoundedIcon/>
                <input type="text" placeholder="Search..." className="bg-slate-100" value={search} onChange={onChange} />
            </div>
            <div className="h-fit w-2/5">
                <button className=" flex px-2 py-1 items-center text-xs border rounded-md text-zinc-50" style={{backgroundColor: '#6746F5'}}><IoCreateOutline className="font-bold text-2xl pr-1 mr-1"/>New Chart</button>
            </div>
        </div>
    );
};
// #6343EE
export default SearchComponent;
